import React from 'react'
import github from '../../src/github-mark-white.png'
const Contact = () => {
  return (
    <div className='grid grid-rows-2 font-patua h-full'>
        <h1 className='row-start-1 row-end-2 text-white text-6xl text-center place-self-center'>Let's Talk</h1>
        <div className='flex row-start-2 row-end-3'>
            <div className='bg-black flex flex-col text-white items-center flex-grow basis-0 text-2xl p-2'>
              <img src={github} alt='github logo' className='h-3/6'></img>
              <p>Here is my github! Most of my projects involve full stack applications that integrate some form of Machine Learning</p>
            </div>
            <div className='bg-github flex flex-col text-black flex-grow basis-0 justify-center text-2xl p-2'>
              <h1 className='text-center text-3xl'>About Me</h1>
              <br/>
              <p>Hi! My name is Prithvidhar Pudu. This website was a little project to stretch my programming muscles. It was a fun experience building this application, from building the front-end to training a model. </p>
            </div>
            <div className='bg-yellow-400 flex flex-col text-black flex-grow basis-0 justify-center text-2xl p-2'>
              <h1 className='text-center'>Contact Me</h1>
              <p className='text-center'>prithvipudu@gmail.com</p>
            </div>


        </div>
    </div>
  )
}

export default Contact