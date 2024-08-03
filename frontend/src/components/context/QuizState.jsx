import React, { useState } from 'react'
import QuizContext from './QuizContext'

const QuestState = (props) => {
    const [question,setQuestion] = useState(null)
    const [answer_a,setAnswer_a] = useState(null)
    const [answer_b,setAnswer_b] = useState(null)
    const [answer_c,setAnswer_c] = useState(null)
    const [answer_d,setAnswer_d] = useState(null)
    const [correctAnswer,setCorrectAnswer] = useState(null)
    const func = async (i)=>{
        const response = await fetch("http://localhost:3000/getquestion")
        const json = await response.json()
        setQuestion(json[i].Question)
        setCorrectAnswer(json[i].correct_answer)
        const Answers = await json[i].Answers
        setAnswer_a(json[i].Answers.answer_a)
        setAnswer_b(json[i].Answers.answer_b)
        setAnswer_c(json[i].Answers.answer_c)
        setAnswer_d(json[i].Answers.answer_d)
    }

    function timer(){
      var sec = 9;
      var timer = setInterval(function(){
          document.getElementById('timer').innerHTML='00:'+`0${sec}`;
          sec--;
          if (sec < 0) {
              clearInterval(timer);
          }
      }, 1000);
    }

    const delayedFunction = (i) => {
      if (i <= 20) {
        console.log(i);
        func(i);
        timer()
        setTimeout(() => {
          delayedFunction(i + 1);
        }, 10000);
      }
    };

    const stopFunction = () =>{
      
    }
  return (
    <QuizContext.Provider
    value={{func,question,answer_a,answer_b,answer_c,answer_d,correctAnswer,timer,delayedFunction,stopFunction}}
  >
    {props.children}
  </QuizContext.Provider>
  )
}

export default QuestState
