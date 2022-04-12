import React, { useContext } from "react";
import { gameContext } from "../../context/UserContext";
import { Questions } from "../../utils/Questions";

const EndScreen = () => {
  const { setScore, score, setGameState, user, setUser } = useContext(gameContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setUser("");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{user} scored</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
