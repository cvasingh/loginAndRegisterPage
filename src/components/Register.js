import React, { useState } from 'react';

export default function Register() {
    const primary = '#207d5c';

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");

    const handleRegister = () => {
        alert(firstname + ' ' + lastname + ' ' + email + ' '
            + phone + ' ' + password + ' ' + password1)
    };



    // check box 
    const [agreeBtn, setAgreeBtn] = useState(true);
    const handleOnChange = () => {
        agreeBtn ? (setAgreeBtn(false)) : (setAgreeBtn(true));
    }
    return <div className='row justify-content-center'>
        <div className='col-md-8 col-sm-10'>
            <div className='m-3 fw-bolder display-4 text-ska-primary-dark'>
                Register
            </div>
            <div className='d-grid gap-2 col-10  mx-auto'>
                <button type="button" className="btn btn-outline-ska-primary-dark border-2 rounded-pill ">
                    <i className=''></i>
                    Continue with Google</button>
                <div className='text-center h6 text-ska-primary-dark'>OR</div>
            </div>
            <form onSubmit={handleRegister} action=''>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" placeholder="First Name" autoFocus
                            className="form-control border-ska-primary-dark border-2 rounded-pill "
                            value={firstname} onChange={(event) => setFirstname(event.target.value)} required />
                    </div>
                    <div className="col">
                        <input type="text" placeholder="Last Name"
                            className="form-control border-ska-primary-dark border-2 rounded-pill "
                            value={lastname} onChange={(event) => setLastname(event.target.value)} required />
                    </div>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Email address"
                        className="form-control border-ska-primary-dark border-2 rounded-pill "
                        value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="input-group mb-3">
                    <input type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone"
                        className="form-control border-ska-primary-dark border-2 rounded-pill"
                        value={phone} onChange={(event) => setPhone(event.target.value)} required />
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="password" placeholder="Password"
                            className="form-control border-ska-primary-dark border-2 rounded-pill "
                            value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <div className="col">
                        <input type="password" placeholder="Password"
                            className="form-control border-ska-primary-dark border-2 rounded-pill border-danger is-invalid"
                            value={password1} onChange={(event) => setPassword1(event.target.value)} required />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className="col ms-3 form-check">
                        <input type="checkbox" className="form-check-input border-ska-primary-dark"
                            id="exampleCheck1" onChange={handleOnChange} />
                        <label className="form-check-label" for="exampleCheck1">
                            Agree to our <a href='#'>Terms and Conditions</a></label>
                    </div>
                </div>
                <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                    <button type="submit" className="btn btn-ska-primary-dark rounded-pill " disabled={agreeBtn}
                    >Register</button>
                </div>
            </form>
            <div className='text-center h6 m-2'>
                Already have a account? <a href=''>Log In</a>
            </div>
        </div>
    </div>
}