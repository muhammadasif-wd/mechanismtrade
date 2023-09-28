import React from 'react';
import Copyright from './Copyright';
import FooterMain from './FooterMain';
import FooterTopBanner from './FooterTopBanner';

const Footer = () => {
    return (
        <div>
            <FooterTopBanner></FooterTopBanner>
            <FooterMain></FooterMain>
            <Copyright></Copyright>
        </div>
    );
};

export default Footer;