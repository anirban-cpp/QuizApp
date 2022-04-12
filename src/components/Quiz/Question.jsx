import React, { useContext, useEffect, useState } from "react";
import { gameContext } from "../../context/UserContext";

const Question = ({ question }) => {

  const { score, setScore } = useContext(gameContext);
  const { id, prompt, snippet, optionA, optionB, optionC, optionD, answer } = question;
  const [checked, setChecked] = useState("");

    useEffect(() => {
        if(checked.toLowerCase().trim() === answer?.toLowerCase().trim()){
            setScore(score+1);
        }
    },[checked])

  return (
    <div className="question">
      <h3>{`${id}. ${prompt}`}</h3>
      <div className="snippet">
          {snippet && <h3>{snippet}</h3>}
      </div>
      <div className="options">
        <input
          type="checkbox"
          id="optionA"
          name="optionA"
          value={optionA}
          checked={checked === 'optionA'}
          onChange={(e) => setChecked(e.target.name)}
        />
        <p>{optionA}</p>
      </div>
      <div className="options">
        <input
          type="checkbox"
          id="optionB"
          name="optionB"
          value={optionB}
          checked={checked === 'optionB'}
          onChange={(e) => setChecked(e.target.name)}
        />
        <p>{optionB}</p>
      </div>
      <div className="options">
        <input
          type="checkbox"
          id="optionC"
          name="optionC"
          value={optionC}
          checked={checked === 'optionC'}
          onChange={(e) => setChecked(e.target.name)}
        />
        <p>{optionC}</p>
      </div>
      <div className="options">
        <input
          type="checkbox"
          id="optionD"
          name="optionD"
          value={optionD}
          checked={checked === 'optionD'}
          onChange={(e) => setChecked(e.target.name)}
        />
        <p>{optionD}</p>
      </div>
    </div>
  );
};

export default Question;
