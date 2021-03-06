import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link} from '@reach/router';
import DeleteButton from './DeleteButton';
import {Card}from '@material-ui/core';

const ProductList = (props) => {
    const [products,setProducts] = useState([]);
    


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    
    return (
        <div>
            {props.products.map((product, idx)=>{

                return ( 
                    <Card>
                <p key={idx}><Link to = {"/products/"+ product._id}>{product.title}, {product.price}, {product.description}</Link>
                
                    
                    

                        <br/>
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}  /> 
                    </p>
                    </Card>
                )

            })}
            
        </div>
    )
}

export default ProductList;