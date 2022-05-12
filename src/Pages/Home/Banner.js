import React from 'react';
import banner from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
import bg from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Hero!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;