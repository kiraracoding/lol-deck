import LearnedCard from '../components/LearnedCard';

function MyChampionsPage() {
    
    return(
        <>
        <div className="flex flex-row pt-[110px] 
                        w-full min-h-screen min-w-[375px]">
            
            <div className="hidden
                            2xl:flex flex-col items-center
                            2xl:basis-1/5 bg-gray-600 pt-20
                            xl:flex flex-col items-center
                            xl:basis-1/5 bg-gray-600 pt-20
                            lg:flex flex-col items-center
                            lg:basis-1/5 bg-gray-600 pt-20
                            md:flex flex-col items-center
                            md:basis-1/5 bg-gray-600 pt-20
                            sm:hidden                                
                            ">
                <div className="flex flex-col items-center w-[200px]">
                    <h1>Champions Learned:</h1>
                    <p>0</p>
                </div>

                <div className="flex flex-col items-center 
                                w-[200px] pt-[30px]">
                    <h1>Champions Left:</h1>
                    <p>0</p>
                </div>
            </div>

            <div className="w-full flex flex-col bg-gray-500
                            justify-center items-center 
                            2xl:basis-4/5
                            xl:basis-4/5
                            lg:basis-4/5
                            md:basis-4/5
                            sm:w-full
                            ">
                <div className='w-full text-center p-10 bg-gray-600
                                flex justify-around
                                2xl:hidden
                                xl:hidden
                                lg:hidden
                                md:hidden
                                sm:text-center'>
                    <h1>Champions Learned: 0</h1>
                    <h1>Champions Left: 0</h1>
                </div>
                <div className='grid grid-cols-1 gap-x-10 
                                justify-items-center p-10
                                w-67/68
                                sm:grid-cols-2 
                                md:grid-cols-2 
                                lg:grid-cols-3
                                xl:grid-cols-4
                                2xl:grid-cols-5
                                '
                                >
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                    <LearnedCard/>
                </div>
            </div>

        </div>
            
        </>
    )
}

export default MyChampionsPage