import React from "react";
import { Link } from "react-router-dom";

const SubComponent = (props) => {
  return (
    <>
      <div className="component h-90 w-5/6 text-black p-3 m-5 flex flex-col justify-around sm:flex-row  border-2 bg-indigo-400 border-indigo-500 rounded-2xl hover:w-11/12 hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-indigo-500">
        <div>
          <img src={props.img} className="h-72 w-72 rounded-full"></img>
        </div>
        <div className="font-bold p-3 text-2xl flex flex-col">
          {props.name}
          <div className="font-normal text-xl pt-3 pb-3">
            by-<span className="font-medium ml-2">{props.teacher}</span>
          </div>
          <div className="p-1">
            Tests
            <div className="pt-2">
              <div className="font-semibold text-lg text-red-900 pb-4">
                Easy <i className="fa-solid fa-arrow-right md:ml-3 ml-2"></i>
                <Link className="bg-white p-1 md:m-8 m-3 border-2 rounded-xl" to="/test"><i className="fa-regular fa-circle-play mr-2"></i>Click Here</Link>
              </div>
              <div className="font-semibold text-lg text-red-900 pb-4">
                Moderate <i className="fa-solid fa-arrow-right md:ml-1 ml-2"></i>
                <Link className="bg-white p-1 md:m-8 m-1 border-2 rounded-xl" to="/test"><i className="fa-regular fa-circle-play mr-2"></i>Click Here</Link>
              </div>
              <div className="font-semibold text-lg text-red-900 pb-4">
                Hard <i className="fa-solid fa-arrow-right md:ml-3 ml-1"></i>
                <Link className="bg-white p-1 md:m-8 m-3 border-2 rounded-xl" to="/test"><i className="fa-regular fa-circle-play mr-2"></i>Click Here</Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div>
        <div className="font-bold p-3 text-2xl flex flex-col">
          Ultimate Test
          <span className="font-normal text-lg">In this test the questions will be auto updated <br/> as per your weakness while you will get extra marks <br/>for Harder levels</span>
        </div>
        <div className="font-semibold text-lg text-red-900 p-3">
                Master <i className="fa-solid fa-arrow-right md:ml-3 ml-1"></i>
                <Link className="bg-white p-1 md:m-8 m-1 border-2 rounded-xl" to="/test"><i className="fa-regular fa-circle-play mr-2"></i>Click Here</Link>
              </div>
        </div>
      </div>
    </>
  );
};

export default SubComponent;
