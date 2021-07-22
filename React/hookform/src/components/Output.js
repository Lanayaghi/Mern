import React from "react";

const Output = (props)=>{
    const {firstName, lastName, email, password, confirmpassword} = props.results;


    return (
        <div>
        <h1>Results:</h1>

<p> First name : {firstName}</p>
<p> Lastt name : {lastName}</p>
<p> Email: {email}</p>
<p> Password : {password}</p>
<p> Confirm password: {confirmpassword}</p>
</div>
    )
}

export default Output;