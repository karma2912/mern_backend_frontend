import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import First from "./components/Test/First";
import Home from "./components/Home/Home";
import Subjects from "./components/SubjectList/Subjects";
import Footer from "./components/Footer/Footer";
import QuizState from "./components/context/QuizState";
import Result from "./components/Result/Result";


const App = () => {
  return (
    <>
    <QuizState>
      <Routes>
        <Route
          path="/"
          key="home"
          element={
            <>
              <Navbar color="bg-yellow-200"/>
              <div className="md:h-screen h-full w-full max-w-full md:overflow-visible overflow-x-hidden font-serif">
                <Home/>
              <Footer/>
              </div>
            </>
          }
        />
        <Route
          path="/results"
          key="results"
          element={
            <>
              <Navbar color="bg-red-400"/>
              <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                <Result/>
              </div>
              <Footer/>
            </>
          }
        />
        <Route
          path="/test"
          key="test"
          element={
            <>
              <Navbar color="bg-red-400"/>
              <div className="bg-white h-screen w-full max-w-full flex flex-col justify-center items-center font-serif">
                <First/>
              </div>
              <Footer/>
            </>
          }
        />
        <Route
          path="/subjects"
          key="subjects"
          element={
            <>
              <Navbar color="bg-indigo-400" />
              <div className="bg-white h-full w-full max-w-full flex justify-center font-serif">
                <Subjects/>
              </div>
              <Footer/>
            </>
          }
        />
      </Routes>
      </QuizState>
    </>
  );
};

export default App;
