import React from 'react'
// import {Link} from 'react-router-dom'
const Header = () => {
  return (
    
    <section className='bg-yellow-400  p-1 w-full sm:grid sm:grid-cols-6 border-black flex flex-col'>
        <div className='text-black font-anton flex flex-col sm:col-start-1 sm:col-end-1 items-center' >
          <h3 className=' text-sm mb-0'><a href='/'>TV</a></h3>
          <h1 className='text-sm p-0'><a href='/'>Nostradamus</a></h1>

        </div>
        <a className='sm:flex sm:flex-col sm:col-start-3 sm:col-end-4 justify-end items-center hover:border-b-2 hover:border-black cursor-pointer self-center sm:self-end' href={"/"}>About</a>
        <a className='sm:flex sm:flex-col sm:col-start-4 sm:col-end-5 justify-end items-center hover:border-b-2 hover:border-black  cursor-pointer self-center sm:self-end' href={"/Who"}>Who is Nostradamus?</a>
        <a className='sm:flex sm:flex-col sm:col-start-5 sm:col-end-6 justify-end items-center hover:border-b-2 hover:border-black  cursor-pointer self-center sm:self-end' href={"/Contact"}>Contact Me</a>
        
    </section>

  )
}

export default Header