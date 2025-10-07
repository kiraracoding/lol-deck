import UnlearnedCard from "../components/UnlearnedCard";

function AllChampionsPage() {
    
    return(
        <>
            <div className="flex flex-row pt-[95px]
                            w-full min-h-screen
                            min-w-[375px]">
            
                <div className="hidden 
                                2xl:flex flex-col items-center
                                2xl:basis-1/5 bg-gray-300 pt-20
                                xl:flex flex-col items-center
                                xl:basis-1/5 bg-gray-300 pt-20
                                lg:flex flex-col items-center
                                lg:basis-1/5 bg-gray-300 pt-20
                                md:flex flex-col items-center
                                md:basis-1/5 bg-gray-300 pt-20
                                sm:flex flex-col items-center
                                sm:basis-1/5 bg-gray-300 pt-20
                                "> 

                    <div className="flex flex-col items-center w-[200px] pt-[15px]">
                        <h1>Champions Learned:</h1>
                        <p>0</p>
                    </div>

                    <div className="flex flex-col items-center 
                                    w-[200px] pt-[30px]">
                        <h1>Champions Left:</h1>
                        <p>0</p>
                    </div>

                </div>

                <div className="w-full flex flex-col items-center bg-gray-500
                                2xl:basis-4/5
                                xl:basis-4/5  
                                lg:basis-4/5
                                md:basis-4/5
                                sm:basis-4/5
                                ">
                    <div className='text-center pt-15
                                    2xl:hidden
                                    xl:hidden
                                    lg:hidden
                                    md:hidden
                                    sm:hidden'>
                        <h1>Champions Learned: 0</h1>
                        <h1>Champions Left: 0</h1>
                    </div>
                    <div className="w-8/9 mt-20">
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

export default AllChampionsPage