import React from 'react';
import HomePage from './page/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './page/shop/shop.component';
import './App.css'
import Header from './Components/header/header.component';


function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;