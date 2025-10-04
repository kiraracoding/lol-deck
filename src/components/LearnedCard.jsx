import placeholderPortrait from '../assets/placeholder-portrait.png';
import closeIcon from '../assets/close-icon.png';


function LearnedCard() {
    return (
        <>
            <div className='relative inline-block pb-5 pt-5'>
                <img 
                    className='h-80 w-60 min-w-60 p-2' 
                    src={placeholderPortrait} 
                    alt="Champion Portrait" 
                />
                <img 
                    className='absolute top-4 right-0 
                    m-4 h-6 w-6 cursor pointer' 
                    src={closeIcon}
                    alt="Close"
                />
                <h1
                    className='absolute w-full
                    top-5/6 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    text-lg font bold text-center px-2'
                    >Champion's name
                </h1>
            </div>
        </>
    );
}

export default LearnedCard;