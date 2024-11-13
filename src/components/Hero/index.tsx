import React from 'react';
import s from './Hero.module.scss'
import Image from 'next/image';
import heroImg from '../../assets/img/hero-img.png'

const Hero = () => {
    return (
        <div id={s.hero}>
            <div className="container">
                <div className={s.hero}>
                    <div className={s.heroText}>
                        <h3>Featured Course</h3>
                        <h1>Run your own online learning platform</h1>
                        <p>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
                        <h4>Kathryn Murphy</h4>
                        <button>Learn More</button>
                    </div>
                    <Image src={heroImg} alt='hero-img' width={614} height={621}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;