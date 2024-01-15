import { useState } from "react";
import Form from "./components/Form";
import Listgroup from "./components/Listgroup";
import Navbar from "./components/Navbar";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, text: "bank of india" },
    { id: 2, text: "bank of baroda" },
  ]);
  const [edit, setedit] = useState({
    todo: {},
    editmode: false,
  });
  console.log(edit);

  // delete todo
  const deletetodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  // save todo
  const savetodo = (text) => {
    const newtodo = {
      id: crypto.randomUUID(),
      text: text,
    };
    settodos([newtodo, ...todos]);
  };

  // edittodo
  const edittodo = (todo) => {
    setedit({
      todo: todo,
      editmode: true,
    });
  };

  // updatetodo
  const updatetodo = (oldid, newtext) => {
    settodos(
      todos.map((item) =>
        item.id === oldid ? { ...item, text: newtext } : item
      )
    );
    setedit({ todo: {}, editmode: false });
  };
  return (
    <>
      <Navbar />
      <Form savetodo={savetodo} edit={edit} updatetodo={updatetodo} />
      <Listgroup todos={todos} deletetodo={deletetodo} edittodo={edittodo} />
    </>
  );
};

export default App;
