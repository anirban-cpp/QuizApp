import React, { useContext } from 'react'
import { gameContext } from '../../context/UserContext'

import { Questions } from '../../utils/Questions'
import Question from './Question'

import './Quiz.css';

const Quiz = () => {

  const { setGameState } = useContext(gameContext);

  return (
    <div className='Quiz'>
      {
        Questions.map((e,i) => (
          <Question key={i} question={{id: (i+1), ...e}}/>
        ))
      }
      <button onClick={() => setGameState("finished")}>Submit</button>
    </div>
  )
}

export default Quiz