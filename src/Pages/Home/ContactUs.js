import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
            className=' text-center'>
            <h2 className='text-[#0FCFEC] text-xl'>Contact Us</h2>
            <h2 className='text-5xl text-white'>Stay connected with us</h2>
            <div className="my-10">
                <input type="text" name='email' placeholder="email" />
                <br />
                <br />
                <input type="text" name='text' placeholder="Subject" />
                <br />
                <br />
                <input className='py-12' type="text" name='text' placeholder="Your message" />
                <br />
                <br />
                <div>
                    <button className="btn bg-[#0FCFEC] bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none text-[white] mb-6">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;