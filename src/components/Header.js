import React from 'react'
// import {Link} from 'react-router-dom'
const Header = () => {
  return (
    
    <section className='bg-yellow-400  p-1 w-full grid grid-cols-6 border-black' >
        <div className='text-black font-anton flex flex-col col-start-1 col-end-1 items-center' >
          <h3 className=' text-sm mb-0'>TV</h3>
          <h1 className='text-sm p-0'>Nostradamus</h1>

        </div>
        <a className='flex flex-col col-start-3 col-end-4 justify-end items-center hover:border-b-2 hover:border-black cursor-pointer' href={"/"}>About</a>
        <a className='flex flex-col col-start-4 col-end-5 justify-end items-center hover:border-b-2 hover:border-black  cursor-pointer' href={"/Who"}>Who is Nostradamus?</a>
        <a className='flex flex-col col-start-5 col-end-6 justify-end items-center hover:border-b-2 hover:border-black  cursor-pointer' href={"/Contact"}>Contact Me</a>
        
    </section>

  )
}

export default Header