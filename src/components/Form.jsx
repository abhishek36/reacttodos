import React, { useEffect, useState } from "react";

const Form = ({ savetodo, edit, updatetodo }) => {
  const [text, settext] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.editmode) {
      updatetodo(edit.todo.id, text);
    } else {
      savetodo(text);
    }
    settext("");
  };

  useEffect(() => {
    settext(edit.todo.text);
  }, [edit]);
  return (
    <div className="container">
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          placeholder="✍ enter your todo"
          onChange={(e) => settext(e.target.value)}
          value={text}
          required
        />
        <button id="savebtn">
          <i className="fa fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
