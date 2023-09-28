import React from 'react';

const FooterMain = () => {
    return (
        <footer className=' bg-[#00235A] text-white py-10'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 justify-center px-5 md:px-20 py-10'>
                <div className='flex flex-col justify-center items-start mt-5 md:mt-0'>
                    <h5 className='text-xl font-semibold'>Contact Us</h5>
                    <ul className='my-2 text-[#ffffffa0]'>
                        <li><a href="/#">About us</a></li>
                        <li><a href="/#">Why choose us</a></li>
                        <li><a href="/#">Pricing</a></li>
                        <li><a href="/#">Testimonial</a></li>
                    </ul>
                </div>

                <div className='flex flex-col justify-center items-start'>
                    <h5 className='text-xl font-semibold'>Resources</h5>
                    <ul className='my-2 text-[#ffffffa0]'>
                        <li><a href="/#">Privacy Policy</a></li>
                        <li><a href="/#">Terms and Condition</a></li>
                        <li><a href="/#">Blog</a></li>
                        <li><a href="/#">Contact Us</a></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <h5 className='text-xl font-semibold'>Product</h5>
                    <ul className='my-2 text-[#ffffffa0]'>
                        <li><a href="/#">Project managment</a></li>
                        <li><a href="/#">Time tracker</a></li>
                        <li><a href="/#">Time schedule</a></li>
                        <li><a href="/#">Lead generate</a></li>
                        <li><a href="/#">Remote Collaboration</a></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-start '>

                    <div className='mb-5'>
                        <h1 className='text-5xl'> Logo</h1>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <label>Subscribe to our Newsletter</label>
                        <div className='flex items-center justify-center mt-3'>
                            <input type="email" name="" id="" className='px-3 py-2 outline-none border-none text-secondary lg:w-full w-2/3' placeholder='your email address' />
                            <button type='submit' className='bg-[#625E5E] py-2 px-3'>Subscribe</button>
                        </div>
                    </div>

                </div>

            </div>
        </footer>


    );
};

export default FooterMain;