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

    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(name);
    }
    return (
        <Paper elevation={3} style={styles.paper}>
        <h3>Add a new author:</h3>
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

            <Button type="submit" variant="contained" color="primary" >
                Add Author
            </Button>
            <Link to={"/"}><Button type="submit" variant="contained" color="primary">
                cancel submition
            </Button></Link>
        </form>
    </Paper>
    )
}

export default Form ;