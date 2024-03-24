import React from 'react'
import nostradamus from "../../src/nostradamus.jpg"
import { useState } from 'react'
import Button from '@mui/material/Button';


const Content = () => {
  const [title, setTitle] = useState('');
  const getDetails = async (title) =>
{
  const fetch = require('node-fetch');

const url = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=78b214f5097e267b839fa2e379f17232`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGIyMTRmNTA5N2UyNjdiODM5ZmEyZTM3OWYxNzIzMiIsInN1YiI6IjY1ZmI3ZWM1MGJjNTI5MDEzMGFkYWNiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Re-bdE0iRo8Oz9wtm6CpVlq8JguvslLmQw6ZyfdHCi0'
  }
};

const res = await fetch(url, options);

var film = await res.json();
  

  console.log(film);

  setTitle(film.results[0]);
  console.log(title.overview)
  
}
  return (
    <>
    <div className='sm:grid sm:grid-cols-2 h-fit mt-20 gap-2 p-2 leading-10  gap-x-4  flex flex-col-reverse'>
      <div className='flex flex-col gap-5 justify-evenly'>
        <p className='text-white sm:text-3xl sm:col-start-1 sm:col-end-2 text-center font-patua  text-sm'>Welcome to sanctum of TV Nostradamus</p>
        <p className='p-2 text-black sm:text-2xl sm:col-start-1 sm:col-end-2 font-patua leading-loose text-center sm:row-span-2 place-self-center bg-yellow-500 rounded-2xl  text-sm'>Thousands of shows and movies are being produced. What to watch?, the choice is overbearing. Will your favourite show die just as you're am getting invested?
            Enter the name of your show/movie to get a prediction of its rating over the next few years to help ease your frustrations</p>
        <input type='text' placeholder='Enter your show here...' className='  sm:col-start-1 sm:col-end-2  sm:text-3xl  rounded-full p-5 bg-yellow-400 relative top-auto  text-sm'  onChange={(e)=>setTitle(e.target.value)} ></input>
        {/* <button type='button' className='self-center min-w-min w-1/4 sm:col-start-1 sm:col-end-2  sm:text-3xl  rounded-full p-5 bg-black text-yellow-400 relative top-auto  text-sm'  onClick={()=>{getDetails(title)}} >Predict!!</button> */}
        <Button variant="contained" sx={{width: '7em',bgcolor: 'black',borderRadius: '3em', alignSelf: 'center', color:'rgba(251, 191, 36)', fontSize:'1.5em' }} onClick={()=>{getDetails(title)}}>Predict!!</Button>
      </div>
        
        
        <img className="h-full w-3/4 col-start-2 col-end-3 place-self-center " alt='Nostradamus and a TV' src={nostradamus}></img>
    </div>
    {

      title ? (<div className='flex flex-col h-fit bg-black rounded m-2 justify-between items-center rounded-md p-2 gap-4'>
      <h1 className='text-yellow-400 text-center object-contain text-3xl'>Movie details</h1>
      <div className='flex gap-2 w-full h-full justify-evenly mt-3'>
        <img src={`https://image.tmdb.org/t/p/w500/${title.poster_path}`} className='w-58 h-127 '/>
        <div className=' flex flex-col gap-2 justify-evenly'>
          <p className='text-center sm:text-1 bg-yellow-400 text-black rounded-lg h-1/2 text-2xl leading-loose py-10 overflow-scroll'>{title.overview}</p>
          <div className='flex w-full  justify-evenly'>
            <p className='bg-yellow-400 text-black text-4xl leading-10 py-20 rounded-3xl px-2'>Released {`${title.release_date}`}</p>
            <p className='bg-yellow-400 text-black text-4xl leading-10 py-20 rounded-3xl px-2'>Popularity {`${title.popularity}`}</p>
          </div>
        </div>
        
      </div>
      
      
    </div>) : (
      <div className='flex flex-col h-1/4 bg-black rounded m-5 justify-evenly rounded-md'>
      <p className='text-yellow-400 self-center text-3xl'>Movie/Tv show details</p>
      </div>
    )
      
    
    }
    
    </>
    
    
  )
}


export default Content