import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <main className='max-w-full h-screen flex justify-center items-center flex-col text-blckgray bg-whiteez'>
       <h1 className='p-2 text-7xl mb-4'>FINAL PROJECT</h1>
       <h2 className='p-2 text-3xl mb-4'>Web Services and API Integration</h2>
       <div className='flex gap-10 p-2 text-xl mb-20'>
         <Link to='/Weather' className="inline-block no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-300 hover:after:w-full">Weather</Link>
         <Link to='/News' className="inline-block no-underline relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black after:transition-width after:duration-300 hover:after:w-full" >News</Link>
       </div>
    </main>
    </>
  )
}

export default Home