import React from 'react';
import HomePage from './page/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './page/shop/shop.component';
import './App.css'
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser:null
        }
    }
    unsubscribeFromAuth=null
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser:user});
            console.log(user);
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;