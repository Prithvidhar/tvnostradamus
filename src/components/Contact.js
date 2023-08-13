import React from 'react'
import github from '../../src/github-mark-white.png'
const Contact = () => {
  return (
    <div className='sm:grid sm:grid-rows-2 font-patua h-full flex flex-col'>
        <h1 className='sm:row-start-1 sm:row-end-2 text-white sm:text-6xl text-center place-self-center text-6xl'>Let's Talk</h1>
        <div className='sm:flex sm:row-start-2 sm:row-end-3'>
            <div className='bg-black flex flex-col text-white items-center flex-grow basis-0 sm:text-2xl text-sm p-2'>
              <img src={github} alt='github logo' className='h-3/6'></img>
              <p>Here is my github! Most of my projects involve full stack applications that integrate some form of Machine Learning</p>
            </div>
            <div className='bg-github flex flex-col text-black flex-grow basis-0 justify-center sm:text-2xl text-sm p-2'>
              <h1 className='text-center sm:text-3xl text-md'>About Me</h1>
              <br/>
              <p>Hi! My name is Prithvidhar Pudu. This website was a little project to stretch my programming muscles. It was a fun experience building this application, from building the front-end to training a model. </p>
            </div>
            <div className='bg-yellow-400 flex flex-col text-black flex-grow basis-0 justify-center sm:text-2xl  text-md p-2'>
              <h1 className='text-center'>Contact Me</h1>
              <p className='text-center'>prithvipudu@gmail.com</p>
            </div>


        </div>
    </div>
  )
}

export default Contact