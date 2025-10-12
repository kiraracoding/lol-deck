import UnlearnedCard from "../components/UnlearnedCard";


function ByRolePage() {
    
    return(
        <>
            <div className="flex flex-row pt-[110px]
                            w-full min-h-screen
                            min-w-[375px]">
            
                <div className="hidden 
                                2xl:flex flex-col items-center
                                2xl:basis-1/5 bg-gray-600 pt-20
                                xl:flex flex-col items-center
                                xl:basis-1/5 bg-gray-600 pt-20
                                lg:flex flex-col items-center
                                lg:basis-1/5 bg-gray-600 pt-20
                                md:flex flex-col items-center
                                md:basis-1/5 bg-gray-600 pt-20
                                sm:flex flex-col items-center
                                sm:basis-1/5 bg-gray-600 pt-20
                                "> 

                    <div className="flex flex-col items-center 
                                    w-[200px] pt-[15px]">
                        <h1>Top Champions</h1>
                        <p>0/0</p>
                    </div>

                    <div className="flex flex-col items-center 
                                    pt-[30px]">
                        <h1>Mid Champions</h1>
                        <p>0/0</p>
                    </div>

                    <div className="flex flex-col items-center 
                                    pt-[30px]">
                        <h1>Jungle Champions</h1>
                        <p>0/0</p>
                    </div>

                    <div className="flex flex-col items-center 
                                    pt-[30px]">
                        <h1>ADC Champions</h1>
                        <p>0/0</p>
                    </div>

                    <div className="flex flex-col items-center 
                                    pt-[30px]">
                        <h1>Support Champions</h1>
                        <p>0/0</p>
                    </div>                   

                </div>

                <div className="w-full flex flex-col items-center bg-gray-500
                                2xl:basis-4/5
                                xl:basis-4/5  
                                lg:basis-4/5
                                md:basis-4/5
                                sm:basis-4/5
                                ">
                    <div className='w-full text-center p-10 bg-gray-600
                                    grid grid-cols-2
                                    2xl:hidden
                                    xl:hidden
                                    lg:hidden
                                    md:hidden
                                    sm:hidden'>
                        <h1 className="pb-5 text-xs">Top Champions: 0/0</h1>
                        <h1 className="pb-5 text-xs">Mid Champions: 0/0</h1>
                        <h1 className="pb-5 text-xs">Jungle Champions: 0/0</h1>
                        <h1 className="pb-5 text-xs">ADC Champions: 0/0</h1>
                        <h1 className="text-xs">Support Champions: 0/0</h1>
                    </div>

                    <div className="w-full bg-gray-700 flex justify-center">
                    <div className="w-full flex flex-row justify-around 
                                    p-5 max-w-4/5">
                        <h1 className="font-bold hover:underline text-[10px]
                                        sm:text-xs
                                        md:text-sm
                                        lg:text-base
                                        xl:text-base
                                        2xl:text-base">TOP</h1>
                        <h1 className="font-bold hover:underline text-[10px]
                                        sm:text-xs
                                        md:text-sm
                                        lg:text-base
                                        xl:text-base
                                        2xl:text-base">JUNGLER</h1>
                        <h1 className="font-bold hover:underline text-[10px]
                                        sm:text-xs
                                        md:text-sm
                                        lg:text-base
                                        xl:text-base
                                        2xl:text-base">MID</h1>
                        <h1 className="font-bold hover:underline text-[10px]
                                        sm:text-xs
                                        md:text-sm
                                        lg:text-base
                                        xl:text-base
                                        2xl:text-base">AD CARRY</h1>
                        <h1 className="font-bold hover:underline text-[10px]
                                        sm:text-xs
                                        md:text-sm
                                        lg:text-base
                                        xl:text-base
                                        2xl:text-base">SUPPORT</h1>
                    </div>
                    </div>

                    <div className="w-8/9 mt-10">
                        <UnlearnedCard/>
                        <UnlearnedCard/>
                        <UnlearnedCard/>
                        <UnlearnedCard/>
                        <UnlearnedCard/>
                        <UnlearnedCard/>
                        <UnlearnedCard/>
                    </div>
                        
                </div>
            </div>
        </>
    )
}

export default ByRolePage