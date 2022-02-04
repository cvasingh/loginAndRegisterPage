import React from 'react';
import contactimg from './img/contact.png'

export default function Contactus() {
    return (
        <div className='bg-ska-primary-light' style={{ height: '100%' }}>
            <div className='row align-items-center justify-content-center mt-5 mx-0'
                style={{
                    height: '50vh',
                    background: `linear-gradient( 10deg,rgba(30, 255, 10, 0.055),rgba(134, 243, 112, 0.514)), url(${contactimg}), no-repeat, 30%, 50%`,
                    backgroundSize: 'cover'
                }}>
                <div className='col-md-5 col-sm-6'>
                    <div className='display-3 fw-bolder text-center text-white'>
                        Contact Us</div>
                    <div className='row justify-content-center mt-3 my-5'>
                        <div className='col-2 h4 fw-bolder text-center social_media'>
                            <a className='fb' href='#'><i class="bi bi-facebook p-2"></i></a>
                        </div>
                        <div className='col-2 h4 fw-bolder text-center social_media'>
                            <a className='insta' href='#'><i class="bi bi-instagram p-2"></i></a>
                        </div>
                        <div className='col-2 h4 fw-bolder text-center social_media'>
                            <a className='twtr' href='#'><i class="bi bi-twitter p-2"></i></a>
                        </div>
                        <div className='col-2 h4 fw-bolder text-center social_media'>
                            <a className='yt' href='#'><i class="bi bi-youtube p-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Course Enquiry section */}
            <div className='row justify-content-center mx-0'>
                <div className='col-md-8 col-sm-10 px-5 py-3'
                    style={{
                        marginTop: '-10vh',
                        borderRadius: '30px',
                        background: 'linear-gradient(125deg, #a2e9c8,#c2f8df)',
                        boxShadow: '0 3px 15px rgba(138, 158, 147, 0.205)'
                    }}>
                    <div className='h1 fw-bolder text-ska-primary-dark'>
                        Course Enquiry
                    </div>
                    <div className='h5 my-3 text-dark'>
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
                                    className="form-control border-ska-primary-dark border-2 border-0 border-bottom" />
                            </div>
                            <div className="col-md m-2">
                                <input type="text" placeholder="Last name" aria-label="Last name"
                                    className="form-control border-ska-primary-dark border-2 border-0 border-bottom" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md m-2">
                                <input type="email" placeholder="Email" aria-label="Email"
                                    className="form-control border-ska-primary-dark border-2 border-0 border-bottom" />
                            </div>
                            <div className="col-md m-2">
                                <input type="tel" type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone" aria-label="Phone"
                                    className="form-control border-ska-primary-dark border-2 border-0 border-bottom" />
                            </div>
                        </div>
                        <div className='row'>
                            <div class="col-md m-2">
                                <textarea class="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                                    placeholder="Message...." rows="2"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="m-4 px-5 btn btn-ska-primary-dark ">Send Message</button>
                    </form>
                </div>
            </div>
            {/* Corporate Enquiry */}
            <div className='row justify-content-center mx-0'>
                <div className='col-md-8 col-sm-10 px-5 py-3'
                    style={{
                        marginTop: '50px',
                        borderRadius: '30px',
                        background: 'linear-gradient(125deg, #a2e9c8,#c2f8df)',
                        boxShadow: '0 3px 15px rgba(138, 158, 147, 0.205)'
                    }}>
                    <div className='h1 fw-bolder text-ska-primary-dark'>
                        Corporate Enquiry
                    </div>
                    <div className='h5 my-3 text-dark'>
                    For any Corporate training/College training requirement please reach out to
                     us on +919876543210 - Darius via call or Whatsapp or you can also send a mail to
                      skillark@gmail.com We will definitely get back to you.
                    </div>
                    <form className=''>
                        <div className="row">
                            <div className="col-md m-2">
                                <input type="text" placeholder="First name" aria-label="First name"
                                    className="form-control border-ska-primary-dark border-2 border-0 border-bottom" />
                            </div>
                            <div className="col-md m-2">
                                <input type="text" placeholder="Last name" aria-label="Last name"
                                    className="form-control border-ska-primary-dark border-2 border-0 border-bottom" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md m-2">
                                <input type="email" placeholder="Email" aria-label="Email"
                                    className="form-control border-ska-primary-dark border-2 border-0 border-bottom" />
                            </div>
                            <div className="col-md m-2">
                                <input type="tel" type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone" aria-label="Phone"
                                    className="form-control border-ska-primary-dark border-2 border-0 border-bottom" />
                            </div>
                        </div>
                        <div className='row'>
                            <div class="col-md m-2">
                                <textarea class="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                                    placeholder="Message...." rows="2"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="m-4 px-5 btn btn-ska-primary-dark ">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Visit Us */}
            <div className='row justify-content-center align-items-center mx-0 px-5'>
                <div className='col-lg-6 col-md-8 '>
                    <div className='h1 text-center text-ska-primary-dark pb-3 mt-5 border-bottom border-5 border-ska-primary-dark'>
                        Visit Us</div>
                    <div className='row p-3'>
                        <div className='col-2 h1 text-ska-secondary'><i class="bi bi-geo-alt-fill"></i></div>
                        <div className='col-10'>
                            <div className='h4'>
                                <a href='https://www.google.com/maps/search/BBDNIIT+course+admissions/@26.8883506,81.0555426,17z/data=!3m1!4b1'>
                                    BBD University, Y Block, Faizabad Rd, Lucknow, Uttar Pradesh 226028
                                </a></div>
                        </div>
                    </div>
                    <div className='row px-3 '>
                        <div className='col-2 h1 text-ska-secondary'><i class="bi bi-telephone-fill"></i></div>
                        <div className='col-10'>
                            <div className='h4'><a href='tel:+9876543210'>+9876543210</a></div>
                        </div>
                    </div>
                    <div className='row p-3'>
                        <div className='col-2 h1 text-ska-secondary'><i class="bi bi-envelope-fill"></i></div>
                        <div className='col-10'>
                            <div className='h4'><a href='mailto:skillark@gmail.com'>skillark@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
