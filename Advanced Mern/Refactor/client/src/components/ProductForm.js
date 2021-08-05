

import React, {useState} from 'react';
import {
    
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
    
} from '@material-ui/core';
const styles = {
    paper: {
        width: "20rem", marginLeft: "30rem"
    },
    input: {
        marginBottom: "1rem"
    },

}

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
        
        <Paper elevation={3} style={styles.paper}>
        <form onSubmit={onSubmitHandler}>
            <FormControl variant="filled" style={styles.input}>
            <p>
                <InputLabel>Title:</InputLabel><br/>
                <OutlinedInput type="text" onChange={(e)=> {setTitle(e.target.value) }} value={title} name = "title" />
            </p>
            </FormControl>

            <FormControl variant="outlined" style={styles.input}>
            <p>
                <InputLabel>Price</InputLabel><br/>
                <OutlinedInput name = "price" type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            </p>
            </FormControl>


            <FormControl variant="outlined" style={styles.input}>
            <p>
                <InputLabel>Description</InputLabel><br/>
                <OutlinedInput name ="description" type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
            </p>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                    Please Submit
                </Button>
        </form>
        
        </Paper>
    )
}

export default ProductForm;