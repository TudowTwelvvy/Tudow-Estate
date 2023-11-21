import React from 'react'
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-slate-200 shadow-md' >
      <div className='flex justify-between items-center max-w-6xl mx-auto p-2'>
        <h1 className='font-bold text-sm sm:text-xl'>
          <span className='text-slate-500 '>Tudow</span>
          <span className='text-slate-700'>Estate</span>
        </h1>

        <form className='bg-slate-100 p-2 rounded-lg flex items-center' >
          <input type="text" name="" id="" placeholder='Search...' className='bg-transparent outline-none w-24 sm:w-64' />
          <BsSearch />
        </form>

        <ul className='flex gap-4'>
          <Link to="/"><li className='hidden sm:inline text-slate-700 hover:font-semibold'>Home</li></Link>
          <Link to="/about"><li className='hidden sm:inline text-slate-700 hover:font-semibold '>About</li></Link>
          <Link to="/sign-in"><li className=' text-slate-700 hover:font-semibold'>Sign in</li></Link>
        </ul>
      </div>

    </header>
  )
}

export default Header