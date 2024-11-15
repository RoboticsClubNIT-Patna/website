import React from 'react';
import { useParams } from 'react-router-dom';
import trendingData from '../../../trendingData';

const REDetails = () => {
    const { cardId } = useParams();

    const selectedCard = trendingData.find((item) => item.id === parseInt(cardId, 10));

    if (!selectedCard) {
        return <div>Card not found</div>;
    }

    const { title, description, date, imageUrl } = selectedCard;

    return (
        <>
            {/* <div>REDetails {title}</div>
            <div>{description}</div>
            <div>Date: {date}</div>
            <div>
                <img src={imageUrl} alt="Card Image" />
            </div> */}
            <div className='flex flex-col-reverse justify-center items-center gap-4 md:gap-0 md:justify-normal md:items-start md:flex-row'>
                 <div className='flex flex-wrap w-full md:w-2/4 h-fit md:h-screen bg-customBlack p-10 sticky top-20'>
                      <div className='border border-gray-700 p-10 font-ultra '>{description}</div>
                      <div className='mt-40 w-full flex justify-end  font-bold text-gray-600 border-t border-gray-300'>Date: {date}</div>
                 </div>
                 <div className='w-2/4'>
                       <div className=''><img src={imageUrl}/></div>
                 </div>
            </div>

        </>
    );
}

export default REDetails;
