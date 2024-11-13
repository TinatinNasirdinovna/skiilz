import ContactUs from '@/components/ContactUs';
import FeaturedCourse from '@/components/FeaturedCourse';
import Hero from '@/components/Hero';
import WorkShop from '@/components/WorkShop';
import React from 'react';

const page = () => {
    return (
        <div>
            <Hero/>
            <FeaturedCourse/>
            <ContactUs/>
            <WorkShop/>
        </div>
    );
};

export default page;