import React from "react";
import Listitem from "./listitem";

const Listgroup = ({ todos, deletetodo, edittodo }) => {
  return (
    <>
      <ul className="listgroup">
        {todos.map((todo) => (
          <Listitem
            key={todo.id}
            todo={todo}
            deletetodo={deletetodo}
            edittodo={edittodo}
          />
        ))}
      </ul>
    </>
  );
};

export default Listgroup;
