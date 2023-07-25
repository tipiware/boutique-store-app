import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import './termcss.css'

const Term = () => {
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
            <title></title>
        </Helmet>
        <div className='headingA'>
            <div className = 'line' ref={Line}></div>
            <h1 className ='title' ref={text}>Policy of Tropical Boutique</h1>
        </div>
        <div className='Content1'>
            <div className = 'text'>
                <h1>
                Terms and conditions
                </h1>
                <p>
                <ol>
                    <li>By accessing or using our website, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. We may modify these terms at any time, and any such modifications will become effective upon posting on the website. It is your responsibility to review these Terms and Conditions regularly</li>
                    <li>By accessing or using our website, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. We may modify these terms at any time, and any such modifications will become effective upon posting on the website. It is your responsibility to review these Terms and Conditions regularly</li>
                    <li>You must be at least 18 years old to use this website. By using this website, you represent and warrant that you are at least 18 years of age. You agree to use the website only for lawful purposes and in compliance with all applicable laws and regulations.</li>
                    <li>Please refer to our Privacy Policy for information on how we collect, use, and disclose personal information. By using our website, you consent to our collection, use, and disclosure practices as described in the Privacy Policy.</li>
                </ol>
                </p>
            </div>
        </div>
        <div className='Content1'>
            <div className = 'text'>
                <h1>
                FAQ
                </h1>
                <h2>1. How can I place an order?</h2>
                <p>
                To place an order, simply browse our website and add the desired items to your shopping cart. When you're ready, proceed to the checkout page, fill in your shipping and payment details, and confirm your order. It's that easy!
                </p>
            </div>

            <div className = 'text'>
                <h2>2. How can I place an order?</h2>
                <p>
                We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and other secure payment gateways. Your financial security is our priority.
                </p>
            </div>
            <div className = 'text'>
                <h2>3. Can I track my order?</h2>
                <p>
                Absolutely! Once your order is shipped, you'll receive a confirmation email with a tracking number. You can use this tracking number to monitor your package's delivery status.
                </p>
            </div>
            <div className = 'text'>
                <h2>4. Do you offer international shipping?</h2>
                <p>
                Yes, we ship internationally to select countries. During the checkout process, you'll be able to see if your location is eligible for shipping and the associated costs.
                </p>
            </div>
            <div className = 'text'>
                <h2>5. What is your return policy?</h2>
                <p>
                We want you to be completely satisfied with your purchase. If you're not happy with an item, you can return it within 7 days of delivery. Please refer to our Shipping and Returns Policy For detailed information on our return process and eligibility.
                </p>
            </div>
            <div className = 'text'>
                <h2></h2>
                <p>
    
                </p>
            </div>
        </div>
        </>
    )
}

export default Term
