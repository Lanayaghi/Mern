import axios from "axios"
import React, {useState, useEffect} from 'react';
import Form from "../components/Form";



const Main = () => {
    const [author, setAuthor] = useState([]);
    const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api')
    //         .then(res =>{ 
    //             setAuthor(res.data)
    //             setLoaded(true);
    //         });
    // }, [])

    const creatAuthor = name => {
        axios.post('http://localhost:8000/api/new', {name})
            .then(res=>{  
                setAuthor([...author, res.data]);
            })

            .catch(err=>{
                
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })  

        }
    
return (
    <div>
        <Form onSubmitProp = {creatAuthor} initialName = "" errors={errors}/>
        
    
    </div>
);

}

export default Main ;