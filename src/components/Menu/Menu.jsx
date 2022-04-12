import React, { useContext, useRef } from "react";
import { gameContext } from "../../context/UserContext";

import './Menu.css';

const Menu = () => {
  const {setGameState, setUser } = useContext(gameContext);

  const inputRef = useRef();

  const handleSubmit = () => {
      setUser(inputRef.current.value)
      setGameState("playing")
  }

  return (
    <div className="menu">
      <div className="input-div">
        <label htmlFor="name">Enter your Name</label>
        <input
            type="text"
            placeholder="Enter your Name"
            ref={inputRef}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Start Quiz
      </button>
      <div className="image-container">
          <img src="https://thumbs.dreamstime.com/b/quiz-word-red-d-letters-to-illustrate-exam-evaluation-assessment-to-measure-your-knowledge-expertise-44060147.jpg" alt='quiz'/>
      </div>
    </div>
  );
};

export default Menu;
