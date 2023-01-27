import React, { useState } from "react";

function App() {
  const [list, setList] = useState(["diego", "rodz"]);
  const [input, setInput] = useState("");

  function addToList() {
    setTimeout(() => {
      setList([...list, input]);
    }, 500);
  }

  function removeFromList(item: string) {
    setTimeout(() => {
      setList(list.filter((x) => x !== item));
    }, 500);
  }
  return (
    <div>
      <input
        placeholder="novo item"
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((li, i) => {
          return (
            <li key={i}>
              {li}
              <button onClick={() => removeFromList(li)}>remover</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
