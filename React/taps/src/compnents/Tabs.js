
import React, {useState} from 'react';

const Tabs = (props) =>{
    const [index, setindx] = useState(1);
    
    return<div style={{margin: 40}}>
        <header>
        {
            props.arrTab.map((tab, i) => {
                const labelStyles = {
                    marginRight:10,
                    padding: 20, 
                    border:"1px solid gray"
                    
                }
                if (index == i) {
                    labelStyles.backgroundColor = "black";
                    labelStyles.color = "white";
                }


                return (
                <span key={i} onClick = {(event) => {setindx(i)}} 
                style = { labelStyles }>{tab.label}</span>
                );
            })
        }
        </header>
        <main style = {{margin:50, border: "1px solid gray", padding:30}}>
            <h3>{props.arrTab[index].content}</h3>
        </main>
    </div>
};

export default Tabs;