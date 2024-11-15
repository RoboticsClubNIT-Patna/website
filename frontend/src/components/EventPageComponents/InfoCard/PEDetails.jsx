import React from 'react';
import { useParams } from 'react-router-dom';
import infocardData from '../../../infocardData';

const PEDetails = () => {
    const { cardId } = useParams();

    const selectedCard = infocardData.find((item) => item.id === parseInt(cardId, 10));

    if (!selectedCard) {
        return <div>Card not found</div>;
    }

    const { title, desc, img } = selectedCard;

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
                      <div className='border border-gray-700 p-10 font-ultra '>{desc}</div>
                 </div>
                 <div className='w-2/4'>
                       <div className=''><img src={img}/></div>
                 </div>
            </div>

        </>
    );
}

export default PEDetails;
