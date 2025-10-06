import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    
    return(
        <>
        <div className='fixed top-0 w-full h-[60px] 
                        flex flex-row 
                        items-center justify-center
                        shadow z-50 bg-gray-300
                        min-w-[375px]'>
                <p>App Logo here</p>
        </div>

        <div className='fixed top-[60px] h-[50px] w-full  
                        flex items-center justify-center 
                        shadow z-50 bg-gray-400
                        min-w-[375px]'>
            <div className='flex w-2/3 
                            min-w-[360px] 
                            justify-between'>
                <Link to='/'>
                    <p className='font-bold hover:underline text-[10px] 
                                  sm:text-xs 
                                  md:text-sm 
                                  lg:text-base 
                                  xl:text-base
                                  2xl:text-base'>MY CHAMPIONS
                    </p>
                </Link>

                <Link to='/all'>
                    <p className='font-bold hover:underline text-[10px]
                                  sm:text-xs 
                                  md:text-sm 
                                  lg:text-base 
                                  xl:text-base
                                  2xl:text-base'>ALL CHAMPIONS
                    </p>
                </Link>

                <Link to='/by-role'>
                    <p className='font-bold hover:underline text-[10px]
                                  sm:text-xs 
                                  md:text-sm 
                                  lg:text-base 
                                  xl:text-base
                                  2xl:text-base'>BY ROLE
                    </p>
                </Link>

                <Link to='/by-tag'>
                    <p className='font-bold hover:underline text-[10px]
                                  sm:text-xs 
                                  md:text-sm 
                                  lg:text-base 
                                  xl:text-base
                                  2xl:text-base'>BY TAG
                    </p>
                </Link>

                <Link to='/by-difficulty'>
                    <p className='font-bold hover:underline text-[10px] 
                                  sm:text-xs 
                                  md:text-sm 
                                  lg:text-base 
                                  xl:text-base
                                  2xl:text-base'>BY DIFFICULTY
                    </p>
                </Link>
            </div>
            
        </div>
        </>
    )
}

export default NavBar