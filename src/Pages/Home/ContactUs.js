import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
            className=' text-center'>
            <h2 className='text-primary text-xl'>Contact Us</h2>
            <h2 className='text-5xl'>Stay connected with us</h2>
            <div class="my-10">
                <input type="text" name='email' placeholder="email" />
                <br />
                <br />
                <input type="text" name='text' placeholder="Subject" />
                <br />
                <br />
                <input className='py-16' type="text" name='text' placeholder="Your message" />
                <br />
                <br />
                <div>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;