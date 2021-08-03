import React, {useState} from "react";


const Search = (props) => {
const [category, setCategory] = useState('');
const [id, setId] = useState (0);

const catHandeler = (e) =>{
    setCategory (e.target.value);
}

const idHandeler = (e) => {
    setId (e.target.value);
}

    return (
        <div>
            <form action={"/"+category+"/"+id}>
        <label>Search For: </label>
        <select value={category} onChange={catHandeler}>
        <option value="chooose cat">choose category</option>
        <option value="people">People</option>
        <option value="planets">Planet</option>
        </select>
        <label>ID: </label>
        <input type="number" onChange = {idHandeler} />
        <button>Search</button>
        </form>
        </div>
    );
}

export default Search;