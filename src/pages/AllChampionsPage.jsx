import UnlearnedCard from "../components/UnlearnedCard";

function AllChampionsPage() {
    
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
                            items-center 
                            bg-gray-500">
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