import React from 'react'
import testimonialImg from "../images/testimonial.png"
export default function Testimonial() {
    return (
        <div className='mainContainer'>
            <div>
                <h1>What people say about us</h1>
                <span>Hear From Our Satisfied Clients: Real Stories, Real Success, Real Estate Excellence</span>
            </div>
            <div className='testimonialContainer'>
                <div className='testimonialCard'>
                    <div className='testimonialImgDiv'>
                        <img className='testimonialImg' src={testimonialImg} alt='testimonial-Img' />
                    </div>
                    <div className='testimonialContent'>
                        <div className='authorNameContainer'>
                            <div>
                                <h2>Rahul</h2>
                            </div>
                            <div class="starsContainer">
                                <div class="stars">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                </div>
                            </div>
                        </div>

                        <p style={{margin:"0px"}}>Hear From Our Satisfied Clients: Real Stories, Real Success, Real Estate Excellence</p>
                    </div>
                </div>
            </div>

            <div className='arrowNavigation' >
                <div className='arrow'> &#x2190;</div>
                <div className='arrow'> &#x2192; </div>
            </div>
        </div>
    )
}
