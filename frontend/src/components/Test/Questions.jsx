import React, { useEffect, useState } from "react";

const Questions = (props) => {
  const {question,answer_a,answer_b,answer_c,answer_d,correctAnswer} = props
  return (
    <>
      <div className="flex justify-between m-12 md:flex-row flex-col">
      <div className="circle md:h-96 h-40 bg-slate-400 md:w-[20rem] w-full flex justify-center items-center rounded-2xl">
          Circle Component
        </div>
        <div className="question-part h-96 md:w-[70rem] w-full bg-white rounded-2xl">
          <div className="question">
            <div className="p-1 font-medium text-xl">Question 1 of 10</div>
            <div className="mt-4 p-2 font-semibold">
              {question}
            </div>
            <div />
            <div className="options mt-12 font-semibold">
              <div className="flex md:flex-row flex-col justify-around ">
                <div className="w-[18rem] border-2 p-2 mb-2 bg-red-300 rounded-2xl text-wrap">
                  A. {answer_a}
                </div>
                <div className="w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap">
                  B. {answer_b}
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-around">
                <div className="w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap">
                  C. {answer_c}
                </div>
                <div className="w-[18rem] border-2 bg-red-300 p-2 mb-2 rounded-2xl text-wrap">
                  D. {answer_d}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={func}> click me!</button> */}
    </>
  );
};

export default Questions;
