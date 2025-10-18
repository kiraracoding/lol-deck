import UnlearnedCard from "../components/UnlearnedCard";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllChampionsPage() {
    
    const [championNames, setChampionNames] = useState([]);

    useEffect(() => {
        const fetchChampions = async () => {
        try {
            const versionsResponse = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
            const latestVersion = versionsResponse.data[0];

            const championsResponse = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
            const championsData = championsResponse.data.data;

            const namesArray = Object.keys(championsData);
            setChampionNames(namesArray);
        } catch (error) {
            console.error('Failed to fetch champion data:', error);
        }
    };

    fetchChampions();
    }, []);

    return(
        <>
            <div className="flex flex-row pt-[110px]
                            w-full min-h-screen
                            min-w-[375px]]
                            "
                >
            
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
                    <div className='w-full text-center p-10 bg-gray-600
                                    flex justify-around
                                    2xl:hidden
                                    xl:hidden
                                    lg:hidden
                                    md:hidden
                                    sm:hidden'>
                        <h1>Champions Learned: 0</h1>
                        <h1>Champions Left: 0</h1>
                    </div>

                    <div className="w-8/9 mt-10">
                        {championNames.map((name) => (
                            <UnlearnedCard key={name} name={name}/>
                        ))}
                    </div>
                        
                </div>
            </div>
        </>
    )
}

export default AllChampionsPage