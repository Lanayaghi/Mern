import React, { useState } from 'react'

const ProductForm = (props) => {
const {initialTitle,initialPrice, initialDescription, onSubmitProps } = props;
const [title, setTitle] = useState(initialTitle);
const [price, setPrice] = useState(initialPrice);
const[description, setDescription] = useState (initialDescription);

const onSubmitHandler = e => {
    e.preventDefault ();
    onSubmitProps ({title, price, description});
    setDescription("");
    setPrice ("");
    setDescription ("");
    setTitle ("");
}
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Tilte</label><br/>
                <input type="text" onChange={(e)=> {setTitle(e.target.value) }} value={title} name = "title" />
            </p>
            <p>
                <label>Price</label><br/>
                <input name = "price" type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            </p>

            <p>
                <label>Description</label><br/>
                <input name ="description" type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;