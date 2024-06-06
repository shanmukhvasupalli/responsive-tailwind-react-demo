import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt=""></img>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold '>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 mx-8 border-b mt-8'>500 GB Storage</p>
                    <p className='py-2 mx-8 border-b'>1 Granted User</p>
                    <p className='py-2 mx-8 border-b'>Send upto 2 GB</p>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trial</button>
                </div>
            </div>
            <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt=""></img>
                <h2 className='text-2xl font-bold text-center py-8'>Patnership</h2>
                <p className='text-center text-4xl font-bold '>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 mx-8 border-b mt-8'>1 TB Storage</p>
                    <p className='py-2 mx-8 border-b'>3 Granted User</p>
                    <p className='py-2 mx-8 border-b'>Send upto 10 GB</p>
                    <button className='text-[#00df9a] bg-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trial</button>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt=""></img>
                <h2 className='text-2xl font-bold text-center py-8'>Group User</h2>
                <p className='text-center text-4xl font-bold '>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 mx-8 border-b mt-8'>5 TB Storage</p>
                    <p className='py-2 mx-8 border-b'>10 Granted User</p>
                    <p className='py-2 mx-8 border-b'>Send upto 20 GB</p>
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards