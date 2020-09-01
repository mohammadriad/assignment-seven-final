import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props);
    return (
        <div className="d-flex flex-wrap" className="product">
            <div className="d-flex flex-wrap">
                <h2> My picture</h2>
                  <img src= {props.product.img} alt=""/>
                  <br/>
                  <br/>
                  
            </div>
        

            <div >
                 <h4 className="product-name"> {props.product.name} </h4>
                 <br/>
                 <p> <small>by: {props.product.by}</small> </p>
                 <p> Tk. {props.product.price} </p>
                  <button 
                  className="main-button"
                  onClick = {() => props.handleAddProduct(props.product)}
                  > Enrol Now</button>
            </div>
            
            
        </div>
    );
};

export default Product;