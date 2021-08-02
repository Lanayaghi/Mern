import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'; 

export default props => {
    const [product, setProduct] = useState({})
    const { removeFromDom } = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
        }
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
            <Link to = "/products"><button onClick = { (e) => {deleteProduct (product._id)} }> Delete</button></Link>

        

        </div>
    )
}
