import React, { useContext,useEffect} from 'react'
import TimeSubmit from './TimeSubmit'
import Questions from './Questions'
import Progress from './Progress'
import QuizContext from '../context/QuizContext'

const Second = () => {
  const context = useContext(QuizContext)
  const {question,answer_a,answer_b,answer_c,answer_d,correctAnswer,delayedFunction,stopFunction} = context
  const i = 0;
  useEffect(()=>{
    delayedFunction(i)
  },[])
 console.log(question)
  return (
    <>
    <div className='h-5/6 md:w-11/12 w-full bg-red-400 rounded-2xl'>
    <TimeSubmit/>
    <Questions question={question} answer_a={answer_a} answer_b={answer_b} answer_c={answer_c} answer_d={answer_d} correctAnswer={correctAnswer}/>
    <Progress/>
    <button onClick={stopFunction}>Stoppp</button>
    </div>
    </>
  )
}

export default Second
