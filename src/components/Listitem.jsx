import React from "react";

const Listitem = ({ todo, deletetodo, edittodo }) => {
  return (
    <>
      <li className="listitem">
        {todo.text}
        <div className="btn">
          <div className="editbtn" onClick={() => edittodo(todo)}>
          <i class="fa-solid fa-pen-to-square"></i>
          </div>
          <div className="dltbtn" onClick={() => deletetodo(todo.id)}>
          <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </li>
    </>
  );
};

export default Listitem;
