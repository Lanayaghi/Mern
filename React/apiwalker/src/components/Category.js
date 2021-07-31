import React from 'react';

const Category = (props) => {
    return (

<div>
    
<label for="cars">Search For:</label>
<select name="category" id="category">
    <option value="people">People</option>
    <option value="planet">Planet</option> 
    </select>
    <form>
    <label>ID:</label>
    <input type="text" />
    <button>Search</button>
    
    </form>
            <p>Name:</p>
            <p>Height:</p>
            <p>Mass:</p>
            <p>Hair Color:</p>
            <p>Skin Color:</p>
        </div>
    )

}

export default Category;