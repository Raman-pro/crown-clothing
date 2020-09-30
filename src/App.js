import React from 'react';
import HomePage from './page/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./page/checkout/checkout.component"

import ShopPage from './page/shop/shop.component';
import './App.css'
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {selectCurrentUser} from "./redux/user/user.selector";

import {setCurrentUser} from './redux/user/user.actions'


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({currentUser:user})
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    console.log(snapShot.data())
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser ? <Redirect to={"/"}/> : <SignInAndSignUpPage/>}/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);