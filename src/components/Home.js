import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Slid from './Slid';
import SlidOnPhone from './SlidOnPhone';
import SlidData from './data/SlidData';
import Capture3 from './img/style/Capture3.png';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className='row align-items-center justify-content-end m-0'>
                <div className='col-md-6 order-md-5'>
                    <img className='float-end' style={{ height: "400px" }}
                        src={Capture3} />
                </div>
                <div className='col-md-5 order-md-1'>
                    <div className='display-2 fw-bold text-center text-ska-primary'>
                        #boost your skills
                    </div>
                </div>
            </div>
            <div className='row align-items-center justify-content-center m-0'>
                <div className='col-md-5 col-10 ska-box '>
                    <div className='h2 text-ska-primary'>
                        Industry Experts Designed Trainings
                    </div>
                    <div className=''>
                        Trainings have been designed to cover not only the fundamentals but also to address the industry issues and bridge the college - industry gap.
                    </div>
                </div>
                <div className='col-md-5 col-10 ska-box '>
                    <div className='h2 text-ska-primary'>
                        Weekends Live Classes
                    </div>
                    <div className=''>
                        Highly interactive live classes on every weekend to make sure you dont get stuck.
                    </div>
                </div>
                <div className='col-md-5 col-10 ska-box '>
                    <div className='h2 text-ska-primary'>
                        Career Assistance
                    </div>
                    <div className=''>
                        To help you get started in the industry.
                    </div>
                </div>
                <div className='col-md-5 col-10 ska-box '>
                    <div className='h2 text-ska-primary'>
                        One to One Interaction
                    </div>
                    <div className=''>
                        You get a chance to directly interact with your instructors/counsellors
                    </div>
                </div>

            </div>

            <Slid SlidData={SlidData} />
            <SlidOnPhone SlidData={SlidData} />


            <Footer />
        </>);
}
