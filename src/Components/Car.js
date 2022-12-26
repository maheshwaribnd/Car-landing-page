import React from 'react'
import carImg from '../Assets/car.png'

function Car() {
    return (
        <div className='w-full flex bg-white py-16 px-10 justify-between'>
            <div className='max-w-[800px] mx-auto grid md:grid-cols-2 gap-4 '>
                <img
                    className='w-[900px] mx-24 my-4'
                    src={carImg}
                    alt="car"
                />
            </div>
            <div className='flex flex-col justify-center'>
                <p classNme="text-[#8cecff] font-bold block bg-slate-800 w-max px-6 py-1 rounded-r-lg">
                    PREMIUM CARS AVAILABLE
                </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Drive any vehcile you want
                </h1>
                <p>
                    1 Month+ Rentals & Subscriptions The flexible alternative to leasing or buying No commitment & no penalties for early exit
                </p>
                <button
                type="button"
                className='bg-black w-48 rounded-md font-medium mx-auto md:mx-0 my-6 py-3 text-[#8cecff]'>
                    Get Started
                </button>
            </div>

        </div>
    )
}

export default Car