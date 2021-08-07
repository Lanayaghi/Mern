import React, {useState, useEffect} from "react";
import List from "../components/List";
import axios from "axios";

const All = () => {
    const [loaded, setLoaded] = useState(false);
    const [player, setPlayer] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/players/list')
            .then(res =>{ 
                setPlayer(res.data)
            
                setLoaded(true);
            });
    }, [])

    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id !==playerId));
        
    }


    return (
        <div>
        {loaded && <List player={player}  setPlayer={setPlayer} removeFromDom={removeFromDom}/>}
        
        </div>
    )
}

export default All;