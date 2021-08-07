import React, {useState, useEffect} from "react";
import List from "../components/List";
import axios from "axios";

const All = () => {
    const [loaded, setLoaded] = useState(false);
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then(res =>{ 
                setAuthor(res.data)
                setLoaded(true);
            });
    }, [])

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !==authorId));
    }


    return (
        <div>
        {loaded && <List author={author} setAuthor={setAuthor} removeFromDom={removeFromDom}/>}
        
        </div>
    )
}

export default All;