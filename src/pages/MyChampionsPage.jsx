import LearnedCard from '../components/LearnedCard';

function MyChampionsPage() {
    
    return(
        <>
        <div className="flex flex-row pt-[110px] 
                        w-full min-h-screen ">
            
            <div className="flex flex-col items-center
                            basis-1/5 bg-gray-300 pt-20">
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

            <div className="basis-4/5 flex flex-col 
                            justify-center items-center 
                            bg-gray-500">
                <div className='grid grid-cols-1 gap-10 
                                justify-items-center p-10
                                w-67/68
                                sm:grid-cols-1 
                                md:grid-cols-2 
                                lg:grid-cols-3 
                                xl:grid-cols-4'>
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