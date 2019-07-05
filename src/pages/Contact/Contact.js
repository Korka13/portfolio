import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import {contactTitle} from '../../data/Titles'
import {contactNav} from '../../data/Navigations';
import {normalFooter} from '../../data/Footers';

const Contact = () => {
    return (
        <div>
            <div class="page-container">
                <div class="content-wrap">
                    <Title data={contactTitle} />
                    <Navigation linksSet={contactNav} />
                </div>
                <Footer data={normalFooter} pageClass="aboutFooter" />
            </div>
        </div>
    );
};

export default Contact;