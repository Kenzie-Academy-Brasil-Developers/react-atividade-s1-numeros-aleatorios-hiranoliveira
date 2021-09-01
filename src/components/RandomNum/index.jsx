import { useState } from "react";
import "./style.css";

const RandomNum = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      <p>{number}</p>
      <button className="button" onClick={randomNumber}>
        Criar novo número
      </button>
    </>
  );
};

export default RandomNum;
