import axios from "axios"
import React, {useState} from "react";

const Axios = (props) => {
    const [state, setState] = useState([]);

    const useEffect = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807'")
        .then(response => {
            setState(response.data.results)
        });
    }


    return (
        <div>
    <button onClick = {useEffect}>Fetch Pokemon</button>
    {state.map((item, index) => {
        return (
            <li key = {index}> {item.name}</li>
        )
    })}
    
    </div>
    );

}

export default Axios; 