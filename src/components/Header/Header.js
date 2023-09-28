import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar/Navbar';

const Header = () => {

    const [show, setShow] = useState(true);

    // -------------------------------------------drawer fixed scroll
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 48) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    }, []);

    return (
        <div className=''>
            {/* Import Top bar */}
            <div
                className={`${show ? "opacity-100 duration-200" : "opacity-0 duration-200"} `}
            >
                <TopBar />
            </div>

            {/* Finished */}

            {/* Import Navbar */}
            <div>
                <div
                // className={`${show ? "w-full z-50 duration-200" :
                //     "w-full top-0  fixed z-50 duration-200"
                //     }`}
                >
                    <Navbar
                        show={show}
                        setShow={setShow}
                    />
                </div>
            </div>

        </div>
    );
};

export default Header;