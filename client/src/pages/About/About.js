import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import './aboutcss.css'

const About = () => {
    const Line = useRef(null);
    const text = useRef(null);

    useEffect(() => {
        setTimeout(() =>{
            Line.current.classList.add('lineon')
            text.current.classList.add('titleon');
        },5)
        return () => {}
    },[])

    return (
        <>
        <Helmet>
            <title>About us</title>
        </Helmet>
        <div className='headingA'>
            <div className = 'line' ref={Line}></div>
            <h1 className ='title' ref={text}>About Us</h1>
        </div>
        <div className='Content1'>
            <div className = 'text'>
                <h1>
                A little things about us
                </h1>
                <p>
                Our store was born out of a shared love for fashion and a desire to create a shopping experience that caters to the individuality of each customer. Founded by a team of fashion enthusiasts, our boutique embraces diversity and embraces the idea that there is no one-size-fits-all approach to style. We take great pride in offering an exclusive selection of high-quality, hand-picked pieces that reflect the latest trends, timeless classics, and everything in between.
                </p>
                <p>At Tropical Boutique Store, we believe that style is a personal statement and that fashion should be an expression of your unique personality. Our online boutique is carefully curated with love and passion to offer you an exquisite collection of fashion-forward apparel and accessories that will elevate your wardrobe and make you stand out from the crowd.</p>
            </div>
            <div className = 'Imageabt'>
                <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://visaguide.world/wp-content/uploads/2021/03/freelancing.jpeg' alt="Segun Adebayo"/>
            </div>
        </div>
        <div className ='Content2'>
            <div className = 'Imageabt'>
                <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/ugbsuvtop0-fpwkuvtxc_q.jpg' alt="Segun Adebayo"/>
            </div>
            <div className = 'text'>
                <h1>
                    Fashion
                </h1>
                <p>From casual-chic to sophisticated elegance, our collections are thoughtfully curated to cater to various tastes and occasions. Whether you're looking for a head-turning evening dress, comfortable everyday wear, statement accessories, or unique gifts, our boutique has something special just for you. We collaborate with emerging designers and renowned brands alike to offer an impressive array of styles that keep you on-trend and ahead of the fashion curve. 
                </p>
                <p>
                We believe in conscious consumerism and strive to offer a selection of sustainable and ethically produced items. By supporting environmentally responsible fashion, we hope to contribute to a better world and a brighter future for the fashion industry.
                </p>
            </div>
        </div>
        <div className='Content1'>
            <div className = 'text'>
                <h1>
                Join our community
                </h1>
                <p>
                When you shop with us, you become part of our vibrant fashion community. Follow us on social media for style inspiration, exclusive promotions, and to connect with like-minded fashion enthusiasts. We encourage you to share your unique looks with us, tag us in your posts, and let us be a part of your fashion journey.
                </p>
                <p>Thank you for choosing the Tropical Boutique Store. We look forward to helping you express your individuality through fashion and providing you with an unforgettable shopping experience. Happy shopping!</p>
            </div>
            <div className = 'Imageabt'>
                <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://visaguide.world/wp-content/uploads/2021/03/freelancing.jpeg' alt="Segun Adebayo"/>
            </div>
        </div>
        </>
    )
}

export default About
