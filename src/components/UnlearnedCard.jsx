import placeholderPortrait from '../assets/placeholder-portrait.png';
import placeholderIcon from '../assets/placeholder-icon.jpg';

function UnlearnedCard() {
    return (
        <>
            <div className='border mb-10
                            flex flex-col
                            2xl:flex 2xl:flex-row
                            2xl:h-80
                            xl:flex xl:flex-row
                            xl:h-80
                            lg:flex lg:flex-row
                            lg:h-70
                            md:flex md:flex-col
                            sm:flex sm:flex-col'>
                
                <div className='flex flex-row p-5
                                2xl:flex 2xl:flex-row
                                2xl:p-0
                                2xl:justify-start
                                xl:p-0
                                xl:flex xl:flex-row
                                lg:flex lg:flex-row
                                lg:p-0
                                md:flex md:flex-row
                                md:justify-start md:p-10
                                sm:flex sm:flex-row
                                sm:p-5 sm:justify-start'>
                    
                    <img className='h-50 w-35 mr-5
                                    2xl:h-80 2xl:w-60 2xl:mr-5
                                    xl:h-80 xl:w-60 xl:mr-5
                                    lg:w-50 lg:h-70
                                    lg:mr-3
                                    md:h-70 md:w-50
                                    md:mr-10
                                    sm:h-60 sm:w-40
                                    sm:mr-7'
                     src={placeholderPortrait}/>

                    <div className='w-1/5 min-w-[170px]
                                    flex flex-col justify-center
                                    2xl:pt-0
                                    xl:pt-0
                                    lg:pt-0
                                    md:w-1/3 md:justify-center'>
                        <h1 className='font-bold text-sm
                                       2xl:text-xl 
                                       2xl:text-left
                                       xl:text-lg
                                       xl:text-left
                                       lg:text-lg
                                       lg:text-left
                                       md:text-xl
                                       sm:text-lg' 
                                       >Champion's Name
                        </h1>
                        <h3 className='pb-5 text-xs
                                       2xl:text-lg
                                       2xl:text-left
                                       xl:text-md
                                       xl:text-left
                                       lg:text-base
                                       lg:text-left
                                       md:text-lg
                                       sm:text-base'
                                       >"Champion's Title"
                        </h3>
                        <p className='text-xs
                                      2xl:text-md
                                      2xl:text-left
                                      xl:text-base
                                      xl:text-left
                                      lg:text-sm
                                      lg:text-left
                                      md:text-md
                                      sm:text-md'
                                      >Tags: Fighter, Tank
                        </p>
                        <p className='pb-5 text-xs
                                      2xl:text-md
                                      2xl:text-left
                                      xl:text-base
                                      xl:text-left
                                      lg:text-sm
                                      lg:text-left
                                      md:text-md
                                      sm:text-md'
                                      >Partype: Bloodwell
                        </p>
                        <p className='text-left text-xs
                                      2xl:text-md
                                      xl:text-base
                                      lg:text-sm
                                      md:text-sm
                                      sm:text-sm'
                                    >Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>
                

                <div className='w-full h-full 
                                flex flex-col justify-around 
                                pt-0 p-5
                                2xl:w-4/5
                                2xl:p-0
                                xl:w-4/5
                                xl:p-0
                                xl:pl-7
                                lg:w-4/5
                                lg:p-0
                                lg:pl-5
                                md:w-full
                                md:p-10
                                md:pt-0
                                sm:w-full
                                sm:p-5
                                sm:pt-0'>
                    <div className='flex items-center 
                                    2xl: mt-5 mb-5
                                    lg:mt-3 mb-3'>
                        <img className='mr-1.5 h-12 w-12
                                        2xl:h-15 2xl:w-15 2xl:mr-3
                                        xl:h-13 xl:w-13 xl:mr-3
                                        lg:h-12 lg:w-12 lg:mr-3
                                        md:h-15 md:w-15 md:mr-3
                                        sm:h-13 sm:w-13 sm:mr-3' 
                             src={placeholderIcon}/>
                        <div>
                            <h1 className='text-[10px]
                                           2xl:text-lg
                                           xl:text-[15px]
                                           lg:text-[13px]
                                           md:text-[13px]
                                           sm:text-[12px]'>Passive: Draconic Essence</h1>
                            <p className='w-2/3 text-[8px] leading-tight
                                          2xl:text-xs 
                                          xl:text-xs
                                          lg:text-[10px] leading-tight
                                          md:text-[10px] leading tight
                                          md:max-w-2/3
                                          sm:text-[10px] leading-tight'>
                               Dragonus automatically stores 5% of damage dealt to champions 
                               as bonus fire damage on his next basic attack.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2'>
                        <div className='flex items-center w-full 
                                        pb-2
                                        2xl:pb-5
                                        xl:pb-5
                                        lg:pb-2
                                        md:pb-2
                                        sm:pb-2'>
                            <img className='mr-1.5 h-12 w-12
                                            2xl:h-15 2xl:w-15 2xl:mr-3
                                            xl:h-13 xl:w-13 xl:mr-3
                                            lg:h-12 lg:w-12 lg:mr-3
                                            md:h-15 md:w-15 md:mr-3
                                            sm:h-13 sm:w-13 sm:mr-3' 
                             src={placeholderIcon} />
                             <div>
                                <h1 className='text-[10px]
                                               2xl:text-lg
                                               xl:text-[15px]
                                               lg:text-[13px]
                                               md:text-[13px]
                                               sm:text-[12px]'
                                               >Q: Flame Breath</h1>
                                <p className='w-full pr-2 text-[8px] leading-tight
                                              2xl:text-xs 2xl:w-4/5 2xl:pr-5
                                              xl:text-xs xl:pr-5
                                              lg:pr-2 lg:text-[10px] lg:leading-tight
                                              md:pr-2 md:text-[10px] md:leading-tight
                                              sm:pr-2 md:text-[10px] md:leading-tight'>
                                   Breathes fire in a cone, dealing magic damage and burning enemies over time.</p>
                             </div>
                        </div>

                        <div className='flex items-center w-full
                                        pb-2
                                        2xl:pb-5
                                        xl:pb-5
                                        lg:pb-2
                                        md:pb-2
                                        sm:pb-2'>
                            <img className='mr-1.5 h-12 w-12
                                            2xl:h-15 2xl:w-15 2xl:mr-3
                                            xl:h-13 xl:w-13 xl:mr-3
                                            lg:h-12 lg:w-12 lg:mr-3
                                            md:h-15 md:w-15 md:mr-3
                                            sm:h-13 sm:w-13 sm:mr-3'
                             src={placeholderIcon} />
                             <div>
                                <h1 className='text-[10px]
                                               2xl:text-lg
                                               xl:text-[15px]
                                               lg:text-[13px]
                                               md:text-[13px]
                                               sm:text-[12px]'
                                               >W: Wing Gust</h1>
                                <p className='w-full pr-2 text-[8px] leading-tight
                                              2xl:text-xs 2xl:w-2/3 2xl:pr-5
                                              xl:text-xs xl:pr-5
                                              lg:pr-2 lg:text-[10px] lg:leading-tight
                                              md:pr-2 md:text-[10px] md:leading-tight
                                              sm:pr-2 md:text-[10px] md:leading-tight'>
                                              Dragonus flaps his wings, knocking enemies back and slowing them.</p>
                             </div>
                        </div>

                        <div className='flex w-full items-center 
                                        pb-2
                                        2xl:pb-5
                                        xl:pb-5
                                        lg:pb-2
                                        md:pb-2
                                        sm:pb-2'>
                            <img className='mr-1.5 h-12 w-12
                                            2xl:h-15 2xl:w-15 2xl:mr-3
                                            xl:h-13 xl:w-13 xl:mr-3
                                            lg:h-12 lg:w-12 lg:mr-3
                                            md:h-15 md:w-15 md:mr-3
                                            sm:h-13 sm:w-13 sm:mr-3' 
                             src={placeholderIcon} />
                             <div>
                                <h1 className='text-[10px]
                                               2xl:text-lg
                                               xl:text-[15px]
                                               lg:text-[13px]
                                               md:text-[13px]
                                               sm:text-[12px]'>E: Scale Shield</h1>
                                <p className='w-full pr-2 text-[8px] leading-tight
                                              2xl:text-xs 2xl:w-2/3 2xl:pr-5
                                              xl:text-xs xl:pr-5
                                              lg:pr-2 lg:text-[10px] lg:leading-tight
                                              md:pr-2 md:text-[10px] md:leading-tight
                                              sm:pr-2 sm:text-[10px] sm:leading-tight'>
                                   Dragonus encases himself in scales, gaining a shield and increased resistance.</p>
                             </div>
                        </div>

                        <div className='flex w-full items-center 
                                        pb-2
                                        2xl:pb-5
                                        xl:pb-5
                                        lg:pb-2
                                        md:pb-2
                                        sm:pb-2'>
                            <img className='mr-1.5 h-12 w-12
                                            2xl:h-15 2xl:w-15 2xl:mr-3
                                            xl:h-13 xl:w-13 xl:mr-3
                                            lg:h-12 lg:w-12 lg:mr-3
                                            md:h-15 md:w-15 md:mr-3
                                            sm:h-13 sm:w-13 sm:mr-3' 
                             src={placeholderIcon} />
                             <div>
                                <h1 className='text-[10px]
                                               2xl:text-lg
                                               xl:text-[15px]
                                               lg:text-[13px]
                                               md:text-[13px]
                                               sm:text-[12px]'>R: Dragon's Wrath</h1>
                                <p className='w-full pr-2 text-[8px] leading-tight
                                              2xl:text-xs 2xl:w-2/3 2xl:pr-5
                                              xl:text-xs xl:pr-5
                                              lg:pr-2 lg:text-[10px] lg:leading-tight
                                              md:pr-2 md:text-[10px] md:leading-tight
                                              sm:pr-2 sm:text-[10px] sm:leading-tight'>
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