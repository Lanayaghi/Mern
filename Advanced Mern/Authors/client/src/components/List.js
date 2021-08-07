import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';


const List =(props) => {
    const {author, setAuthor} = props;
    
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId))
        
    }
    return (
        <div>
            <Link to={"/new"}>Add an author</Link>
            <h3>We have Quotes by:</h3>
            <table>
                <tr>
                    <th>Authors</th>
                    <th>Actions</th>
                </tr>
                
                {props.author.map((author, idx)=>{return (
                    
                    <tr>
                        <td key={idx}><Link to={"/new/"+ author._id}> {author.name}</Link></td> <Link to={"/new/" + author._id + "/edit"}>
                        Edit
                    </Link> 
                    |   <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </tr>
                        )})}
                </table>
        </div>
    )
}
export default List;