import React from 'react';
import doctor from '../../assets/images/doctor.png'

const Appoint = () => {
    return (
        <div class="hero min-h-screen bg-base-200 my-12">
            <div class="hero-content flex-col lg:flex-row">
                <img src={doctor} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className='text-primary'>Appointment</h1>
                    <h1 class="text-5xl font-bold">Make an appointment Today</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appoint;