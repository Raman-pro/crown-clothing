import React from 'react';
import {connect} from 'react-redux';

import { setHidden } from '../../redux/cart/cart.action';

import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

const CartIcon = ({Hidden}) => (
    <div className={'cart-icon'} onClick={Hidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className={'item-count'}>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    Hidden:()=>dispatch(setHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);