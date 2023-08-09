import React from 'react'
// const gridstyle = {
//   display 
//   grid-template-columns: "repeat(2, minmax(0, 1fr))";
// }
// const headstyle = {
//   grid-column:"1/2",
  
// }
const Header = () => {
  return (
    
    <section className='bg-yellow-400  p-1 w-full grid grid-cols-6 border-black' >
        <div className='text-black font-anton flex flex-col col-start-1 col-end-1 items-center' >
          <h3 className=' text-sm mb-0'>TV</h3>
          <h1 className='text-sm p-0'>Nostradamus</h1>

        </div>
        <p className='flex flex-col col-start-3 col-end-4 justify-end items-center hover:border-b-2 hover:border-black cursor-pointer'>About</p>
        <p className='flex flex-col col-start-4 col-end-5 justify-end items-center hover:border-b-2 hover:border-black  cursor-pointer'>Who is Nostradamus?</p>
        <p className='flex flex-col col-start-5 col-end-6 justify-end items-center hover:border-b-2 hover:border-black  cursor-pointer'>Contact Me</p>
        
    </section>

  )
}

export default Header