import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [done, setDone] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
    setDone((currentArray) => [...currentArray, false]);
  };
  const onDelete = (index) => {
    console.log(index);
    setToDos((currentArray) => {
      return currentArray.filter((value, idx) => idx !== index);
    });
  };
  const onDone = (index) =>
    setDone((currentArray) => {
      const newArray = [...currentArray];
      newArray[index] = !newArray[index];
      return newArray;
    });
  console.log(done);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <div>
            <li
              key={index}
              onClick={() => onDone(index)}
              className={done[index] ? styles.strike : null}
            >
              {item}
            </li>
            <button onClick={() => onDelete(index)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
