import { useState } from "react";

function CheckNumber() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const isEven = parseInt(number) % 2 === 0;
  return (
    <div style={{ display: "grid" }}>
      <h1>Check</h1>
      <input
        type="text"
        value={number}
        onChange={({ target }) => {
          const rawValue = target.value;
          const numberValue = parseFloat(rawValue);

          setNumber(rawValue);
          setError("");
          if (isNaN(numberValue)) {
            setError("Nao e numero");
            return;
          }
        }}
        placeholder="Digite um numero"
      />
      <p role="presentation">{isEven ? "PAR" : "INPAR"}</p>

      <p role="alert"> {error}</p>
      <button>Verificar</button>
    </div>
  );
}

export default CheckNumber;
