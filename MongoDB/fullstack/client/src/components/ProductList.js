import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    // const [product,setProduct] = useState({});
    const { removeFromDom } = props;


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
        }

        // useEffect(()=>{
        //     axios.get("http://localhost:8000/api/products/"+props._id)
        //         .then(res => setProduct(res.data))
        //         .catch(err => console.log(err))
        // }, [product])

    return (
        <div>
            {props.products.map((product, idx)=>{

                return <p key={idx}><Link to = {"/products/"+ product._id}>{product.title}, {product.price}, {product.description}</Link> <button onClick = { (e) => {deleteProduct (product._id)} }> Delete</button>  </p>

            })}
            
        </div>
    )
}
