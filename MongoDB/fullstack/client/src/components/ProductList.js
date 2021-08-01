import React from 'react'
import axios from 'axios';
export default props => {
    return (
        <div>
            {props.products.map((Product, idx)=>{
                return <p key={idx}>{Product.title}, {Product.price}, {Product.description}</p>
            })}
        </div>
    )
}
