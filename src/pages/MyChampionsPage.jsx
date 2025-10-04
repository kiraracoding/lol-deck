

function MyChampionsPage() {
    
    return(
        <>
        <div className="pt-[110px] h-screen w-full flex flex-row">
            
            <div className="basis-1/4 bg-gray-300 flex flex-col items-center pt-[50px]">
                <div className="flex flex-col items-center w-[200px]">
                    <h1>Champions Learned:</h1>
                    <p>0</p>
                </div>

                <div className="flex flex-col items-center w-[200px] pt-[30px]">
                    <h1>Champions Left:</h1>
                    <p>0</p>
                </div>
            </div>

            <div className="basis-3/4 bg-gray-500">
                <p>this is learned section</p>
            </div>

        </div>
            
        </>
    )
}

export default MyChampionsPage