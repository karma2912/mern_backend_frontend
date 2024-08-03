import React from 'react'
import gkf from "./gkf.webp"
import { Link } from 'react-router-dom'
const GeneralKnowledge = () => {
  return (
    <div className='md:h-[32rem] h-[82rem] md:w-11/12 w-full flex md:flex-row flex-col justify-between items-center rounded-2xl'>
      <img src={gkf} className=''></img>
      <i className="fa-solid fa-arrow-right md:fa-arrow-down ml-3 text-8xl just"></i>
      <div className='text-5xl md:w-[55rem] w-11/12 bg-yellow-300 font-bold md:p-16 p-10 rounded-2xl border-2 border-yellow-500 shadow-2xl'>General Knowledge
        <div className='text-lg pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta voluptatum pariatur illum odio nisi iste ipsa fuga aliquid quibusdam harum placeat fugiat omnis facilis minus ex laudantium, laboriosam dolorem.</div>
        <div className='text-lg pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, hic natus? Saepe ex velit explicabo mollitia placeat voluptatibus commodi, inventore aspernatur! Perferendis nisi sed vitae neque at eligendi corporis ea.</div>
        <Link className='text-xl font-normal border-2 border-black bg-green-400 p-2 rounded-xl' to="/test"><i className="fa-regular fa-circle-play mr-2"></i>PLAY NOW</Link>
      </div>
    </div>
  )
}

export default GeneralKnowledge

