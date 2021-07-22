import React from "react";


const HookForm = (props) => {
    const {values, setvalue} = props;



const onChange = e => {
    setvalue({
        ...values,
        [e.target.name] : e.target.value
    });
};
    return(
    <>
<form >
    <div>
        <label>First name:</label>
        <input type = "text" name = "firstName" onChange = {onChange}/>
    </div>
    <div>
        <label> Last name: </label>
        <input type ="text" onChange = {onChange} name = "lastName"/>
    </div>
    
    <div>
        <label> Email:</label>
        <input type = "email" onChange = {onChange} name = "email"/>
    </div>

    <div>
        <label> Password: </label>
        <input type = "password" onChange = {onChange} name ="password" />
    </div>

    <div>
        <label> Confirm Password: </label>
        <input type = "password" onChange = {onChange} name = "confirmpassword" />
    </div>
    

</form>



</>




);
};






export default HookForm;
