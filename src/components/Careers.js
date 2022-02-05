import React from 'react';
import CareersData from './CareersData';

export default function Careers() {
    return (
        <div className='bg-ska-primary-light' style={{ minHeight: '100vh' }}>
            <div className='row justify-content-center mx-0'>
                <div className='col-md-8 col-sm-10 px-5 py-3'
                    style={{
                        marginTop: '10vh',
                        borderRadius: '30px',
                        background: 'linear-gradient(125deg, #a2e9c8,#c2f8df)',
                        boxShadow: '0 3px 15px rgba(138, 158, 147, 0.205)'
                    }}>
                    {CareersData.data.map((items) => {
                        return (<div className='row mx-0'>
                            <div className='h1 my-3'>{items.option}</div>
                            {items.Careers.map((item) => {
                                return (<div className='col-6 mx-5'>
                                    <div className='h4'>{item.name}</div>
                                    <div className='h6'>{item.desc}<hr/></div>
                                </div>)
                            })}
                        </div>)
                    })}
                </div>
            </div>
        </div>
    );
}
