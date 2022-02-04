import React from 'react';
import contactimg from './img/contact.png'

export default function Contactus() {
    return (
        <div className='bg-ska-primary-light' style={{ height: '100%' }}>
            <div className='row align-items-center justify-content-center mt-5'
                style={{
                    height: '50vh',
                    background: `linear-gradient( 180deg,rgba(30, 255, 10, 0.055),rgba(134, 243, 112, 0.514)), url(${contactimg}), no-repeat, 30%, 50%`,
                    backgroundSize: 'cover'
                }}>
                <div className='col-md-5 col-sm-6'>
                    <div className='display-3 fw-bolder text-center text-white'>
                        Contact Us</div>
                    <div className='row justify-content-center'>
                        <div className='col h1 fw-bolder text-center text-white'>
                            F
                        </div>
                        <div className='col h1 fw-bolder text-center text-white'>
                            L
                        </div>
                        <div className='col h1 fw-bolder text-center text-white'>
                            T
                        </div>
                        <div className='col h1 fw-bolder text-center text-white'>
                            Y
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                marginTop: '-3%',
            }}>
                <div className='row justify-content-center px-5'>
                    <div className='col-md-9 col-sm-11 px-5 py-3 bg-white'
                        style={{
                            marginTop: '-2%',
                            borderRadius: '30px',
                            boxShadow: '0 3px 15px rgba(138, 158, 147, 0.205)'
                        }}>
                        <div className='h1 fw-bolder text-ska-primary-dark'>
                            Enquiry
                        </div>
                        <div className='h6 my-3 text-dark'>
                            Feel free to reach out to us if you have a query related to any
                            course or product that we offer. If you have already submitted the
                            details and have not yet heard from us please use the chat option in
                            the home page our associates are available on chat 24/7 or call on the
                            numbers provided on the website.
                        </div>
                        <form className=''>
                            <div className="row">
                                <div className="col-md m-2">
                                    <input type="text" placeholder="First name" aria-label="First name"
                                        className="form-control border-ska-primary border-2" />
                                </div>
                                <div className="col-md m-2">
                                    <input type="text" placeholder="Last name" aria-label="Last name"
                                        className="form-control border-ska-primary border-2" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md m-2">
                                    <input type="email" placeholder="Email" aria-label="Email"
                                        className="form-control border-ska-primary border-2" />
                                </div>
                                <div className="col-md m-2">
                                    <input type="tel" type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone" aria-label="Phone"
                                        className="form-control border-ska-primary border-2" />
                                </div>
                            </div>
                            <div className='row'>
                                <div class=" m-2">
                                    <textarea class="form-control border-ska-primary border-2"
                                        placeholder="Message...." rows="2.5"></textarea>
                                </div>
                            </div>
                            <button type="submit" class="m-4 px-5 btn btn-ska-primary-dark ">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
}
