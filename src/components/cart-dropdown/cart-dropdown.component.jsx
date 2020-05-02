import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux' 

import './cart-dropdown.styles.scss'


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(item => {
                    return <CartItem key={item.id} item={item} />
                })
                :
                <span className="empty-message">YOUR CART IS EMPTY</span>
            }
        </div>
        <CustomButton 
            onClick = {() => {
                history.push('./checkout')
                dispatch(toggleCartHidden())
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));