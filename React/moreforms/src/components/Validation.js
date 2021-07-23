
import React, { useState } from "react";

const Validation = (props) => {

    const [firstname, setFirstname] = useState("");
    const [fError, setFError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lError, setLError] = useState("");

    const [email, setEmail] = useState("");
    const [eError, setEError] = useState("");

    const [password, setPassword] = useState("");
    const [pError, setPError] = useState("");

    const [confirmpasswor, setConfirmpassword] = useState("");
    const [cError, setCError] = useState("");
    
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2) {
            setFError("field must be at least 2 characters");
        } else {setFError("")};
        }

    const handelLastname = (e) =>{
        setLastname(e.target.value);
        if(e.target.value.length < 2) {
            setLError("field must be at least 2 characters");
        } else {setLError("")};
    }

    const handelEmail = (e) =>{
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEError("field must be at least 5 characters");
        } else {setEError("")};
        }
        
    
    const handelPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPError("field must be at least 8 characters");
        } else {setPError("")};
        }

    const handelConfirmpassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value != password) {
            setCError("Password must match!");
        } else {setCError("")};
        }
    return(
    
<form onSubmit= {(e) => e.preventDefault() }>

     

    <div>
        <label>First name:</label>
        <input type = "text"  onChange = {handleFirstname}/>

        {fError?  <p> {fError}  </p> : ''}
    </div>

    <div>
        <label> Last name: </label>
        <input type ="text" onChange = {handelLastname} />

        {lError?  <p>   {lError}  </p> : ''}
    </div>
    
    <div>
        <label> Email:</label>
        <input type = "email" onChange = {handelEmail}/>

        {eError?  <p> {eError} </p> : ''}
    </div>

    <div>
        <label> Password: </label>
        <input type = "password" onChange = {handelPassword} />

        {pError?  <p> {pError} </p> : ''}
    </div>

    <div>
        <label> Confirm Password: </label>
        <input type = "password" onChange = {handelConfirmpassword }  />
    
        {cError? <p> {cError} </p> : ''}
    </div>
    

</form>

);
    };


export default Validation;