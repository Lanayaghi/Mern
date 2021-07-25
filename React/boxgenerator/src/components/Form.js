import React, { useState } from "react";

const Form = (props) => {
    
        const [newColor, setNewColor]= useState("");
        function newBox (event){
            event.preventDefault()
            props.setBoxes([...props.boxes, newColor]);
            setNewColor("");
        }
            return(
        <form onSubmit = { (event) => newBox (event)}>
        <label>Color</label>
        <input type = "text" value={newColor} //if we needed to clear the input 
        onChange = {(event) => {setNewColor(event.target.value);}} />
        <button>Add</button>
        </form>
            )
        }

export default Form;