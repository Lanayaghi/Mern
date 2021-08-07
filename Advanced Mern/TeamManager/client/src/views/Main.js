import { navigate } from "@reach/router";
import axios from "axios"
import React, {useState, useEffect} from 'react';
import Form from "../components/Form";



const Main = () => {
    const [player, setPlayer] = useState("");
    const [errors, setErrors] = useState([]);
    const [position,setPosition] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        isLoaded && axios.post('http://localhost:8000/api/players/addplayer', {
            name: player,
            position : position,
        } )
            .then(res=>{  
                setPlayer([...player, res.data]);
                navigate("/players/list")
            })

            .catch(err=>{
                
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }, [player, position]) ;
    })
          

        
    
return (
    <div>
        <Form getLoaded={setIsLoaded} getName={setPlayer} getPosition={setPosition} initialPosition= "" initialName = "" errors={errors}/>
        
    
    </div>
);

}

export default Main ;