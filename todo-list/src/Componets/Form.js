import React from 'react'


function Form({inputText, setInputText, todos, setTodos}) {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,{text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText("")
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label></label>
        <input value={inputText} onChange={inputTextHandler} type="text" placeholder="What needs to be done?"></input>
        {/* <button type="submit" >Add</button> */}
      </form>
    </div>
  );
}

export default Form;
