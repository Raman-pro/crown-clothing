import React from 'react';
import {connect} from 'react-redux';

import { setHidden } from '../../redux/cart/cart.action';
import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

const CartIcon = ({Hidden,itemCount}) => (
    <div className={'cart-icon'} onClick={Hidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className={'item-count'}>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    Hidden:()=>dispatch(setHidden())
})

const mapStateToProps = (state) => ({
    itemCount:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);