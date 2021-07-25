import React, {useState, useEffect} from  'react';

const Pokemon = (props) => {
const [state, setState] = useState([]);

const useEffect = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807'")
    .then(response => {
        return response.json()
    })

    .then(response => {
        setState(response.results)
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


export default Pokemon;