import React from 'react'

const Progress = () => {
  return (
    <div className='m-12 bg-red-500 h-48 flex justify-around items-center text-xl rounded-2xl'>
      <div className='h-14 w-28 bg-orange-400 flex justify-center items-center rounded-3xl'>Prev</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>1</div>
      <div className='h-14 w-20 bg-green-400 flex justify-center items-center rounded-3xl'>2</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>3</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>4</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>5</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>6</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>7</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>8</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>9</div>
      <div className='h-14 w-20 bg-orange-400 flex justify-center items-center rounded-3xl'>10</div>
      <div className='h-14 w-28 bg-orange-400 flex justify-center items-center rounded-3xl'><button>Next</button></div>
    </div>
  )
}

export default Progress
