import React from 'react';
import CareersData from './CareersData';

export default function Careers() {
    return (
        <div className='bg-ska-primary-light' style={{ minHeight: '100vh' }}>
            <div className='row justify-content-center mx-0'>
                <div className='col-md-8 col-sm-10 mt-5'>
                    {CareersData.data.map((items) => {
                        return (<div className='my-5 ska-box px-5 py-3'>
                            <div className='h1 my-3'>{items.option}</div>
                            {items.Careers.map((item) => {
                                return (<div className='mx-5'>
                                    <div className='h4'>{item.name}</div>
                                    <div className='h6'>{item.desc}</div>
                                    <hr className='fw-bolder text-ska-primary-dark'/>
                                </div>)
                            })}
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}
