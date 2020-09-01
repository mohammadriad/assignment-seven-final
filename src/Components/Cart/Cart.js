import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd)=> total + prd.price, 0);
    // let total = 0;
    // for(let i = 0; i<cart.length; i++){
    //     const product = cart[i];
    //     total = total + product.price;
    // }


    return (
        <div>
            <h5>Order Summary : </h5>
            <p>Items Ordered : {cart.length} </p>
            <p>Total Price: Tk {total}/=</p>
        </div>
    );
};

export default Cart;