import React from 'react';
import { Icon } from '@iconify/react';

const TopBar = () => {
    return (
        <div className='bg-[#FF5E14] text-white hidden md:block'>
            <div className='grid grid-cols-2 md:w-11/12 lg:w-3/4 mx-auto py-3'>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center'>
                        <Icon icon="material-symbols:call" className=' xl:text-3xl' />
                        <p className=' text-md font-thin'>+01790763887</p>
                    </div>
                    <div className='flex items-center justify-center ml-3 lg:ml-6'>
                        <Icon icon="ic:round-mail-outline" className='text-xl xl:text-3xl' />
                        <p className='ml-1 text-md font-thin'>tamimhasan@gmail.com</p>
                    </div>
                    <div className='flex items-center justify-center ml-3 lg:ml-6'>
                        <Icon icon="mdi:map-marker" className='xl:text-3xl' />
                        <p className='lg:ml-1 text-md font-thin'>Boikali,khulna</p>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <p>Follow </p>
                    <Icon icon="ant-design:twitter-square-filled" className='xl:text-3xl ml-6' />
                    <Icon icon="uil:whatsapp-alt" className='xl:text-3xl ml-3' />
                    <Icon icon="uil:instagram-alt" className='xl:text-3xl ml-3' />

                </div>
            </div>
        </div>
    );
};

export default TopBar;