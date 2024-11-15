import React from 'react'

const CarouselCard = ({imageUrl,head1, head2, backgroundColor,para}) => {
   
    
  return (
   <>
       
          <div className='flex  flex-col  md:flex-row rounded-3xl overflow-hidden bg-slate-50 h-[50rem] md:h-[70vh] lg:h-[80vh] flex-shrink-0  w-[90vw]' >
               <div className='flex justify-center overflow-hidden  bg-green-500 h-[100vw] md:h-auto md:w-2/4'>
                    <img className='cover' src={imageUrl} alt='' />
               </div>
               <div className={`p-8  ${backgroundColor} flex-grow md:h-auto md:w-2/4`}>
                    <div className='flex justify-center  '><h1 className='text-black text-7xl font-anton'>{head1}</h1></div>
                    <div className=''
                         style={{
                                    WebkitTextStroke:'1px black',
                                    stroke:'1px black',
                                    color:'transparent'    
                               }}      
                    >
                     <h1 className='flex justify-center font-anton text-7xl'>{head2}</h1>
                    </div>
                    <div className='flex justify-center text-black mt-6'><p>{para}</p></div>
                    
               </div>
            </div>       
     

    
   </>
  )
}

export default CarouselCard