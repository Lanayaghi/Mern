
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import React, {useEffect} from 'react';
import axios from 'axios';


const List =(props) => {
    const {player, setPlayer} = props;
    
    useEffect (() => {
        axios.get('http://localhost:8000/api/players/list')
        .then(res => setPlayer(res.data))
    }, [setPlayer])
    
    const removeFromDom = (playerId) => {
        setPlayer(player.filter(player => player._id !== playerId))
        
    }
    return (
        <div>
            
            <Link to={"/players/addplayer"}>Add Player</Link>
            <table>
                <tr>
                    <th>Player</th>
                    <th>Preferred position</th>
                    <th>Actions</th>
                </tr>
                
                {props.player.map((player, idx)=>{return (
                    
                    <tr key={idx}>
                        <td ><Link to={"/players/list"}> {player.name} </Link></td> 
                        <td>{player.position}</td>
                    |   <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>
                    </tr>
                        )})}
                </table>
        </div>
    )
}
export default List;