import React from 'react';
import img from '../../Assets/img/Group 171.png'
import img2 from '../../Assets/img/Arrow 4.png'
const OurCommunity = () => {
    return (
        <div className= 'text-center my-10  w-[80%] mx-auto' >
             <h1 className="text-[#00235A] lg:text-[42px] font3 sm:text-[30px] font-semibold">
             Our Community 
        </h1>
        <p className="text-[#00235a82] lg:text-[20px] font3 mx-10 sm:text-[16px] mb-4">
          Our Products Lorem ipsum dolor sit amet consectetur
        </p>

        <div className='md:flex mt-6 '>
            <div className='lg:w-1/2 '>
                <img src={img} alt="" />
            </div>

            <div className='text-start md:w-3/4 md:ml-5 ml-o '>
                <h1 className='lg:mb-8  mt-3 lg:mt-5 font-bold text-[#00235A] lg:text-2xl md:text-[24px] my-2 '>Lorem ipsum dolor sit amet cons</h1>
                <p className='sm:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur</p>
                
              <div className='flex'>
              <p className='mr-2 text-[#FF5E14] mt-2 sm:text-sm lg:text-base'>See More</p>
              <img src={img2} alt="" className='w-4 h-4 mt-3' />

              </div>

              <div className='flex lg:mt-8 mt-4'>
              <div className='mr-8'>
                <p className='lg:text-2xl sm:text-xl font-bold text-[#00235A]'>800</p>
                <p className='text-[#00235A]'>Worker</p>
              </div>
              <div className='mr-8'>
                <p className='lg:text-2xl sm:text-xl font-bold text-[#00235A]'>16000</p>
                <p className='text-[#00235A]'>Client</p>
              </div>
              <div className='mr-8'>
                <p className='lg:text-2xl sm:text-xl font-bold text-[#00235A]'>250+</p>
                <p className='text-[#00235A]'>Project</p>
              </div>

              </div>
            </div>

        </div>

        </div>
    );
};

export default OurCommunity;