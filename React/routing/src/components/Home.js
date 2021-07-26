import React from 'react';


const Home = (props) => {
     const {color, backgroundcolor, id} = props;
     const name = window.location.pathname.substring (1, window.location.pathname.length)
     
    return (
        <div>
        {color!=null ?<h1 style = {{color:color, backgroundColor: backgroundcolor}}>{id}</h1>
            :name == "home" ?<h1>Welcome Dum Dum </h1> :
            isNaN(name)? <h1>this world is : {id}</h1>:
            <h1>this number is: {id}</h1>}
            </div>
    )
        }
export default Home;