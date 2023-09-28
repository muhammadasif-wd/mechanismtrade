import React from 'react';
import { Icon } from '@iconify/react';


const Copyright = () => {
    return (
        <div className=' grid md:grid-cols-4 px-5 lg:px-20 justify-start items-start text-white bg-[#00235A] mx-auto pb-14'>
            <div className='border-b-2 w-full mb-5 md:mb-0 border-[#ffffffa0]'></div>

            <div className='md:col-span-2'>
                <div className='flex justify-evenly items-center' >
                    <p>Copyright @2023</p>
                    <div className='flex'>
                        <Icon icon="ant-design:twitter-square-filled" className='xl:text-3xl ml-6' />
                        <Icon icon="uil:whatsapp-alt" className='xl:text-3xl ml-3' />
                        <Icon icon="uil:instagram-alt" className='xl:text-3xl ml-3' />
                    </div>
                </div>
            </div>
            <div className='border-b-2 border-[#ffffffa0] hidden md:block'></div>
        </div>
    );
};

export default Copyright;