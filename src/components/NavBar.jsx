import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    
    return(
        <>
        <div className='fixed top-0 w-full shadow z-50 bg-gray-300 flex flex-row items-center justify-center h-[60px]'>
                <p>App Logo here</p>
        </div>

        <div className='fixed top-[60px] pr-40 pl-40 w-full shadow z-50 bg-gray-400 flex flex-row items-center justify-between h-[50px]'>
            <Link to='/'>
                <p className='font-bold hover:underline'>MY CHAMPIONS</p>
            </Link>

            <Link to='/all'>
                <p className='font-bold hover:underline'>ALL CHAMPIONS</p>
            </Link>

            <Link to='/by-role'>
                <p className='font-bold hover:underline'>BY ROLE</p>
            </Link>

            <Link to='/by-tag'>
                <p className='font-bold hover:underline'>BY TAG</p>
            </Link>

            <Link to='/by-difficulty'>
                <p className='font-bold hover:underline'>BY DIFFICULTY</p>
            </Link>
        </div>
        </>
    )
}

export default NavBar