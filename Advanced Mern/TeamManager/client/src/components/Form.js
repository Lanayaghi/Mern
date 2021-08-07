import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate,Link } from '@reach/router';

import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const styles = {
    paper: {
    width: "15rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}
const Form = (props) => {

    const {initialPosition, initialName, errors, getName, getPosition, getLoaded } = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        getName(name);
        getPosition(position);
        getLoaded(true);
        
    }
    return (
        <Paper elevation={3} style={styles.paper}>
        <h3>Add player:</h3>
        {errors.map((err, index) => <p key={index}>{err}</p>)}

        <form onSubmit = {onSubmitHandler}>
            
            <FormControl variant="outlined" style={styles.input}>
                <InputLabel >Name:</InputLabel> 
                <br/> <br/>

                <OutlinedInput type="text"
                name = "name"
                value= {name} 
                onChange = { e => {setName(e.target.value)}}/>
            </FormControl>
                <InputLabel >Preferred Position:</InputLabel> 
                <br/> <br/>
                <FormControl variant="outlined" style={styles.input}>
                <OutlinedInput type="text"
                name = "positon"
                value= {position} 
                onChange = { e => {setPosition(e.target.value)}}/>
            </FormControl>

            <Button type="submit" variant="contained" color="primary" > 
                Add player
            </Button> 
        
        </form>
    </Paper>
    )
}

export default Form ;