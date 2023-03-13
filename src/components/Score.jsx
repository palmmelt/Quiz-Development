import React, { useContext } from 'react'
import { DataContect } from '../App'
import QuestionsData from '../data/QuestionsData'

const Score = () => {
    const {setAppState,score,setScore} = useContext(DataContect)

    const restartApp =()=>{
        setScore(0)
        setAppState('menu')
    }
  return (
    <div className='score'>
        <h1>ผลคะแนนสอบเท่ากับ</h1>
        <h2>{`${score} / ${QuestionsData.length}`}</h2>
        <button onClick={restartApp}>ทำใหม่อีกครั้ง</button>
    </div>
  )
}

export default Score
