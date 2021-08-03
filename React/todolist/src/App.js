import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Todo from './components/Todo';

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

 const handelNewTodSubmit = (e) => {
   e.preventDefault();

   if (newTodo.length ==0) {
     return;
   }
 
   setTodos([...todos, 
  {text: newTodo,
  status: false}]);
   setNewTodo("");
 }

 const handelTodoDelete = (delIdx) => {
   const filterdTodos = todos.filter((todo, i) => {
     return i != delIdx;
   })
   setTodos(filterdTodos);
 }
const handelStatus = (index) => {
  const obj = {
    ...todos[index]
  };

  obj.status = !obj.status;
  console.log(obj)
  console.log(todos)

const arrBeforeIndex = [...todos.slice(index + 1)]
console.log(arrBeforeIndex)
  setTodos([
    ...todos.slice(0, index),
    obj
  ].concat(todos.slice(index + 1)));

} 


   return (
    <div className="App">
    <form onSubmit = {(e) =>{handelNewTodSubmit(e);}}>
      <input type= "text" onChange = {(e) => {setNewTodo(e.target.value)}}  value= {newTodo}/>
    <div>
      <button>Add</button>
    </div>
    </form>
    <hr/>
    {todos.map((todo, i) => {
      return <Todo key = {i} todo = {todo} handelStatus = {handelStatus} i = {i} handelTodoDelete = {handelTodoDelete}/>
     
    })}
    </div>
  );
}

export default App;
