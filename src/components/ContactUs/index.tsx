import React from 'react';
import s from './ContactUs.module.scss'
import Image from 'next/image';
import img from '../../assets/img/contact.png';
const ContactUs = () => {
    return (
        <section className={s.contact}>
            <div className={s.img}>
                <Image src={img}  alt='img'/>
            </div>
            <div className={s.contactText}>
                <h1> Get personalized learning recommendations</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</p>
                <button>Contact Us</button>
            </div>
        </section>
    );
};

export default ContactUs;