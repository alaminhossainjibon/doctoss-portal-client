import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const Dental = () => {
    return (
        <section className='flex justify-center items-center mb-20 gap-10'>
            <div className='flex-1 flex-1 hidden lg:block'>
                <img src={treatment} alt="" />
            </div>

            <div className='flex-1'>
                <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton></PrimaryButton>
            </div>
        </section>
    );
};

export default Dental;