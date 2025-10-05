import placeholderPortrait from '../assets/placeholder-portrait.png';
import placeholderIcon from '../assets/placeholder-icon.jpg';

function UnlearnedCard() {
    return (
        <>
            <div className='flex flex-row border mb-10
                            2xl:h-80
                            xl:h-80
                            lg:h-70'>
                <img className='2xl:h-80 2xl:w-60 2xl:mr-5
                                xl:h-80 xl:w-60 xl:mr-5
                                lg:w-50 lg:h-70
                                lg:mr-3'
                     src={placeholderPortrait}/>

                <div className='w-1/5 h-full min-w-[165px]
                                flex flex-col justify-center'>
                    <h1 className='font-bold 
                                   2xl:text-xl
                                   xl:text-lg
                                   lg:text-lg' 
                                   >Champion's Name
                    </h1>
                    <h3 className='pb-5 
                                   2xl:text-lg
                                   xl:text-md
                                   lg:text-base'
                                   >"Champion's Title"
                    </h3>
                    <p className='2xl:text-md
                                  xl:text-base
                                  lg:text-sm'
                                  >Tags: Fighter, Tank
                    </p>
                    <p className='pb-5 
                                  2xl:text-md
                                  xl:text-base
                                  lg:text-sm'
                                  >Partype: Bloodwell
                    </p>
                    <p className='2xl:text-md
                                  xl:text-base
                                  lg:text-sm'
                                  >Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                    </p>
                </div>

                <div className='w-3/5 h-full 
                                flex flex-col justify-around 
                                pl-10
                                xl:pl-7
                                lg:pl-5'>
                    <div className='flex items-center 
                                    2xl: mt-5 mb-5
                                    lg:mt-3 mb-3'>
                        <img className='mr-3
                                        2xl:h-15 2xl:w-15
                                        xl:h-13 xl:w-13
                                        lg:h-12 lg:w-12'
                             src={placeholderIcon}/>
                        <div>
                            <h1 className='2xl:text-lg
                                           xl:text-[15px]
                                           lg:text-[13px]
                                           '>Passive: Draconic Essence</h1>
                            <p className='w-4/5
                                          2xl:text-xs 2xl:w-2/3
                                          xl:text-xs
                                          lg:text-[10px] leading-tight'>
                               Dragonus automatically stores 5% of damage dealt to champions 
                               as bonus fire damage on his next basic attack.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div className='flex items-center w-full 
                                        2xl:pb-5
                                        xl:pb-5
                                        lg:pb-2'>
                            <img className='mr-3
                                            2xl:h-15 2xl:w-15
                                            xl:h-13 xl:w-13
                                            lg:h-12 lg:w-12' 
                             src={placeholderIcon} />
                             <div>
                                <h1 className='2xl:text-lg
                                               xl:text-[15px]
                                               lg:text-[13px]'
                                               >Q: Flame Breath</h1>
                                <p className='w-full pr-5
                                              2xl:text-xs 2xl:w-4/5
                                              xl:text-xs
                                              lg:pr-2 text-[10px] leading-tight'>
                                   Breathes fire in a cone, dealing magic damage and burning enemies over time.</p>
                             </div>
                        </div>

                        <div className='flex items-center w-full
                                        2xl:pb-5
                                        xl:pb-5
                                        lg:pb-2'>
                            <img className='mr-3
                                            2xl:h-15 2xl:w-15
                                            xl:h-13 xl:w-13
                                            lg:h-12 lg:w-12'
                             src={placeholderIcon} />
                             <div>
                                <h1 className='2xl:text-lg
                                               xl:text-[15px]
                                               lg:text-[13px]
                                               '>W: Wing Gust</h1>
                                <p className='w-full pr-5
                                              2xl:text-xs 2xl:w-2/3
                                              xl:text-xs
                                              lg:pr-2 text-[10px] leading-tight'>
                                   Dragonus flaps his wings, knocking enemies back and slowing them.</p>
                             </div>
                        </div>

                        <div className='flex w-full items-center 
                                        2xl:pb-5
                                        xl:pb-5
                                        lg:pb-2'>
                            <img className='mr-3
                                            2xl:h-15 2xl:w-15
                                            xl:h-13 xl:w-13
                                            lg:h-12 lg:w-12' 
                             src={placeholderIcon} />
                             <div>
                                <h1 className='2xl:text-lg
                                               xl:text-[15px]
                                               lg:text-[13px]
                                               '>E: Scale Shield</h1>
                                <p className='w-full pr-5
                                              2xl:text-xs 2xl:w-2/3
                                              xl:text-xs
                                              lg:pr-2 text-[10px] leading-tight'>
                                   Dragonus encases himself in scales, gaining a shield and increased resistance.</p>
                             </div>
                        </div>

                        <div className='flex w-full items-center 
                                        2xl:pb-5
                                        xl:pb-5
                                        lg:pb-2'>
                            <img className='mr-3
                                            2xl:h-15 2xl:w-15
                                            xl:h-13 xl:w-13
                                            lg:h-12 lg:w-12' 
                             src={placeholderIcon} />
                             <div>
                                <h1 className='2xl:text-lg
                                               xl:text-[15px]
                                               lg:text-[13px]
                                               '>R: Dragon's Wrath</h1>
                                <p className='w-full pr-5
                                              2xl:text-xs 2xl:w-2/3
                                              xl:text-xs
                                              lg:pr-2 text-[10px] leading-tight'>
                                   Dragonus wings back and unleashes a massive blast of flame, dealing huge damage and knocking up enemies.</p>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default UnlearnedCard