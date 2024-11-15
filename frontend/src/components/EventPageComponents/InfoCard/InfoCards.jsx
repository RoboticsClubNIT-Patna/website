
import { useState } from "react";
import InfoCard from "./InfoCard";
import infocardData from '../../../infocardData'

const InfoCards = () => {
    const [infodata, setinfodata] = useState(infocardData)
    return (<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[40px]">
        {
            infocardData.map((item) => (<InfoCard key={item.id} img={item.img} title={item.title} desc={item.desc} cardId={item.id}/>))
        }
    </div>);
}
export default InfoCards;