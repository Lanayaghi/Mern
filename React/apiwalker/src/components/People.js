import React, {useEffect, useState} from 'react';
import axios from 'axios';

const People = (props) => {
    const [people, setPeople] = useState('');

    useEffect (() => {
        axios.get("https://swapi.dev/api/people/"+props.id)
        .then ((response) => setPeople (response.data))
        .catch(error => console.log(error))
    }, [props.id])
return (
    <div>

<h1>{people.name}</h1>
            <p><b>Height: </b>{people.height}</p>
            <p><b>Mass:</b> {people.mass}</p>
            <p><b>Hair Color:</b> {people.hair_color}</p>
            <p><b>Skin Color:</b> {people.skin_color}</p>
    </div>
);
}

export default People;