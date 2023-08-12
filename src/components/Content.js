import React from 'react'
import nostradamus from "../../src/nostradamus.jpg"

const Content = () => {
  return (
    <div className='grid grid-cols-2 h-full mt-20 gap-2 p-2 leading-10  gap-x-4'>
      <div className='flex flex-col gap-5'>
        <p className='text-white text-3xl col-start-1 col-end-2 text-center font-patua '>Welcome to sanctum of TV Nostradamus</p>
        <p className='text-black text-2xl col-start-1 col-end-2 font-patua leading-loose text-center row-span-2 place-self-center bg-yellow-500 rounded-2xl'>Thousands of shows and movies are being produced. What to watch?, the choice is overbearing. Will your favourite show die just as you're am getting invested?
            Enter the name of your show/movie to get a prediction of its rating over the next few years to help ease your frustrations</p>
        <input type='text' placeholder='Enter your show here...' className='  col-start-1 col-end-2  text-3xl  rounded-full p-5 bg-yellow-400 relative top-auto'></input>
        
      
      </div>
        
        
        <img className="h-full w-3/4 col-start-2 col-end-3 place-self-center " alt='Nostradamus and a TV' src={nostradamus}></img>
    </div>
  )
}

export default Content