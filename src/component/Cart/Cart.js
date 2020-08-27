import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.tCart;

    const totalPrice = cart.reduce((total, courses) => total + courses.price, 0);

    return (
        <div className="cart-item ">
            <h4 className="text-warning">Courses enrole summary</h4>
            <h5>Total courses enrole: {cart.length}</h5>
            <h5>Total Price: {totalPrice}</h5>
            <button className="btn btn-primary btn-lg btn-block">Enrole Review</button>
        </div>
    );
};

export default Cart;