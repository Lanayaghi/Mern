import React from 'react'
import axios from 'axios';
import {Button}from '@material-ui/core';


const DeleteButton = (props) => {
    const { productId, successCallback } = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                successCallback();
            })
    }
    return (
            <Button onClick = {deleteProduct} variant="contained" color="primary">Delete </Button>
        
    )
}
export default DeleteButton;
