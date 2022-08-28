import React, {useContext} from 'react';
import {useNavigate} from "react-router";

import {CartContext} from "../../context/cart.context";

import Button from '../button/button.component';
import CartItem from "../cart-item/cart-item.component";

import {CartDropDownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = ()=>{
        navigate('/checkout');
    }

    return (
        <CartDropDownContainer>
            <CartItems className='cart-items'>
                {cartItems.length ? cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}/>
                )):(
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
};

export default CartDropdown;
