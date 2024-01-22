import React, { useState } from 'react';

const Testpage = () => {
  const [todo, setTodo] = useState([]);
  const [inputVal, setInputVal] = useState('');

  function handleDelete(index) {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTodo = [...todo];
      [updatedTodo[index - 1], updatedTodo[index]] = [updatedTodo[index], updatedTodo[index - 1]];
      setTodo(updatedTodo);
    }
  }

  function handleMoveDown(index) {
    if (index < todo.length - 1) {
      const updatedTodo = [...todo];
      [updatedTodo[index], updatedTodo[index + 1]] = [updatedTodo[index + 1], updatedTodo[index]];
      setTodo(updatedTodo);
    }
  }

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    if(inputVal!="")
    {setTodo([...todo, inputVal]);
    setInputVal('');}
    else{
        alert("Enter task")
    }
  };

  return (
    <div className='App'>
      <label>Input your data</label>
      <input
        type='text'
        placeholder='Enter your todo'
        value={inputVal}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add my task</button>
      <div>
        {todo.map((val, ind) => (
          <div key={ind}>
            {val}
            <button onClick={() => handleDelete(ind)}>🗑️</button>
            <button onClick={() => handleMoveUp(ind)}>⬆️</button>
            <button onClick={() => handleMoveDown(ind)}>⬇️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testpage;
