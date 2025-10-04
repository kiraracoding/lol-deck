import placeholderPortrait from '../assets/placeholder-portrait.png';

function UnlearnedCard() {
    return (
        <>
            <div className='h-[250px] flex flex-row'>
                <img className='w-[200px]'
                src={placeholderPortrait}/>

                <div className='w-1/5'>
                    <h1>Champion's Name</h1>
                    <h3>Champion's Title</h3>
                    <p>Tags: Fighter, Tank</p>
                    <p>Partype: Bloodwell</p>
                </div>

                <div className='w-1/5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                       Consectetur adipiscing elit quisque faucibus ex sapien vitae. 
                       Ex sapien vitae pellentesque sem placerat in id. 
                    </p>
                </div>
            </div>
        </>
    );

}

export default UnlearnedCard