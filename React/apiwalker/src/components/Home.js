import React, {useState, useEffect} from 'react';

const Home = (props) => {
const {search, changeHandeler, submitHandeler} = props;

return (

    <div>
        <form onSubmit= {submitHandeler}>
  <label for="cars">Search For:</label>
  <select name="category" onChange= {changeHandeler} value = {search.category}>
    <option value="people">People</option>
    <option value="planet">Planet</option> 
    </select>
    
    <label>ID:</label>
    <input type="number"  name = "id" onChange = {changeHandeler} value = {search.id}/>
    <button>Search</button>
    </form>
    
  

    </div>
)

}

export default Home;