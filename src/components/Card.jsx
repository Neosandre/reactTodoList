import React, {useState} from 'react'

export default function Card() {
  var textInput="";
  var listItems= [];
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
function handleOnChange (event){
  
      textInput = event.target.value;
      setInput(textInput);
    }

    function handleAdd() {
      setItems((prevItems) => {
        return [...prevItems, input];


      });
   
      setInput("");
    }



    const [isDone, setIsDone] = useState(false);
 
  function handleClick(event) {
    setIsDone((prevs) => {
      return !prevs;
    });
  }

  return (
    <div className='container'>
    <header>To Do List</header>
    <div className='inputdiv'>
       <input 
       value={input} 
      onChange={handleOnChange}
      placeholder='task name...'></input>
       
      <button className='addbtn' onClick={handleAdd} >Add</button>
    </div>
     
      <ul className='ul'>
      {items.map((todoItem) => {
            return <li style={{ textDecoration: isDone ? "line-through" : "none" }}
      onClick={handleClick} >{todoItem}</li>;
          })}
        
      

      </ul>
    </div>
  )
}
