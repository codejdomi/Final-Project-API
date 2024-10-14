import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <main className='max-w-full h-screen flex justify-center items-center flex-col'>
       <h1 className='p-2 text-7xl mb-4'>FINAL PROJECT</h1>
       <h2 className='p-2 text-3xl'>Web Services and API Integration</h2>
       <div className='flex gap-6 p-2 text-xl mb-10'>
         <Link to='/Weather'>Weather</Link>
         <Link to='/News'>News</Link>
       </div>
    </main>
    </>
  )
}

export default Home