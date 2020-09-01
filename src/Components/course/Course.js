import React, { useState } from 'react';
import fakeData from '../../FakeData/fakeData';
import Product from '../product/Product';
import './Course.css'
import Cart from '../Cart/Cart';

const Course = () => {
    const first12 = fakeData.slice(0,12); 
    const [ products, setProducts] = useState(first12);
    const [cart, setCart] =useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product ];
        setCart(newCart);
    }
    return (
        <div className ="shop-container">
            <div className ="product-container">
                {
                  products.map(pd => <Product handleAddProduct = {handleAddProduct}
                        product ={pd}
                        ></Product>)
                }
            </div>
             
             <div className="cart-container">
                 <Cart cart = {cart}> </Cart>
             </div>
            
           
            
            
        </div>
    );
};

export default Course;