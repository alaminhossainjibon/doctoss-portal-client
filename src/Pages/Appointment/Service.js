import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-white shadow-xl mt-20">
            <div className="card-body text-black text-center">
                <h2 className="text-xl font-bold text-[#19D3AE]">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm bg-[#19D3AE] text-white uppercase border-none">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;