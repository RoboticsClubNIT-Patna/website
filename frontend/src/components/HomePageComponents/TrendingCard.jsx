import Buttons from "../Buttons";
import {Link} from 'react-router-dom'

const TrendingCard = ({ imageUrl, title, description, date, cardId }) => {

  
 

  return (
    <div className="flex flex-col gap-6 group justify-center p-3 md:items-center items-center ">
      <div className="flex justify-center items-center w-full">
        <div className="rounded-3xl overflow-hidden flex items-center justify-center  w-80 sm:h-auto  lg:h-[20rem] lg:w-auto mb-4">
          <img
            srcSet={imageUrl}
            alt="banner"
            className="transition scale-125 duration-1000 group-hover:scale-150 object-cover w-full sm:h-auto lg:h-full "

          ></img>
        </div>
      </div>

      <p className="text-lg leading-6 text-gray-600 font-semibold px-4">{title}</p>
      <p className="text-2xl font-semibold px-4  h-48 w-80 sm:w-full overflow-hidden ">{description}</p>
      <p className="text-lg text-gray-600 font-semibold px-4">{date}</p>

      <Link to={`/redetails/${cardId}`}>
            <Buttons buttonText="Read More" />
      </Link>

    </div>
  );
};

export default TrendingCard;