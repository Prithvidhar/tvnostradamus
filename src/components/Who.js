import React from 'react'
import Image from '../../src/nostraport.jpeg'
// const image = require("../../src/nostraport.jpeg")
const Who = () => {
  return (
    <div className='grid grid-cols-2 h-full mt-20 gap-2 p-2 leading-10  gap-x-4 h-full'>

    <img src={Image} alt='portrait of Nostradamus' className='col-start-1 col-end-2 place-self-center  h-9/12 w-9/12 object-cover'></img>
    <div className='text-black bg-yellow-400 text-lg col-start-2 col-end-3 p-4 rounded-xl place-self-center'>
    <p>Michel de Nostredame (December 1503 – July 1566[1]), usually Latinised as Nostradamus,[a] was a French astrologer, apothecary, physician, and reputed seer, who is best known for his book Les Prophéties (published in 1555), a collection of 942 poetic quatrains[b] allegedly predicting future events.</p>
    <p>
    Nostradamus claimed to base his published predictions on judicial astrology—the astrological 'judgment', or assessment, of the 'quality' (and thus potential) of events such as births, weddings, coronations etc.—but was heavily criticised by professional astrologers of the day such as Laurens Videl[42] for incompetence and for assuming that "comparative horoscopy" (the comparison of future planetary configurations with those accompanying known past events) could actually predict what would happen in the future.[43]
    </p>
    <h1 className='text-xl'>Popular Claims</h1>
    <p>Nostradamus's supporters have retrospectively claimed that he predicted major world events, including the Great Fire of London, the French Revolution, the rises of Napoleon Bonaparte and Adolf Hitler, the atomic bombings of Hiroshima and Nagasaki, and September 11 attacks.[57][28]</p>
    </div>
    
    </div>
  )
}

export default Who