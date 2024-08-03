import React from 'react'
import SubComponent from './SubComponent'
import amf from "./amf.jpg"
import sef from "./sef.jpg"
import dbmsf from "./dbmsf.jpg"
import wpf from "./wpf.jpg"

const Subjects = () => {
  return (
    <>
    <div className='flex w-full max-w-full flex-col items-center'>
    <SubComponent name="Applied Mathematics" teacher="Sandhya Bhavsar" img={amf} />
    <SubComponent name="Software Engineering" teacher="Rakhi Gupta" img={sef} />
    <SubComponent name="Database Management System" teacher="Pragati Thawani" img={dbmsf} />
    <SubComponent name="Web Programming" teacher="Neha Patel" img={wpf} />
    </div>
    </>
  )
}

export default Subjects
