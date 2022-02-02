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
        notification(firstname + ' ' + lastname + ' ' + email + ' '
        + phone + ' ' + password + ' ' + password1, 'danger');
        alert(firstname + ' ' + lastname + ' ' + email + ' '
            + phone + ' ' + password + ' ' + password1)
    };



    // check box 
    const [agreeBtn, setAgreeBtn] = useState(true);
    const handleOnChange = () => {
        agreeBtn ? (setAgreeBtn(false)) : (setAgreeBtn(true));
    }
    // liveNotification
    var liveNotification = document.getElementById('liveNotification');
    function notification(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type
            + ' alert-dismissible" role="alert">' + message +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        liveNotification.append(wrapper)
    }
    return <div className='row justify-content-center'>
        <div className='col-md-8 col-sm-10'>

            {/* notification*/}
            <div id="liveNotification"></div>

            <div className='m-3 fw-bolder display-4'
                style={{ color: `${primary}`, fontFamily: 'Poppins, sans-serif' }}>
                Register
            </div>
            <div className='d-grid gap-2 col-10  mx-auto'>
                <button type="button" className="btn btn-outline-success border-2">
                    <i className=''></i>
                    Continue with Google</button>
                <div className='text-center h6' style={{ color: `${primary}` }}>OR</div>
            </div>
            <form onSubmit={handleRegister} action=''>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" placeholder="First Name" autoFocus
                            className="form-control border-success border-2 rounded-pill "
                            value={firstname} onChange={(event) => setFirstname(event.target.value)} required />
                    </div>
                    <div className="col">
                        <input type="text" placeholder="Last Name"
                            className="form-control border-success border-2 rounded-pill "
                            value={lastname} onChange={(event) => setLastname(event.target.value)} required />
                    </div>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder="Email address"
                        className="form-control border-success border-2 rounded-pill "
                        value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-success border-2 dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">+91</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">+91</a></li>
                        <li><a className="dropdown-item" href="#">+92</a></li>
                        <li><a className="dropdown-item" href="#">+93</a></li>
                        <li><a className="dropdown-item" href="#">+94</a></li>
                    </ul>
                    <input type="tel" pattern="[5-9]{1}[0-9]{9}"
                        className="form-control border-success border-2"
                        placeholder="Phone" id="exampleInputPhone" aria-label="Text input with dropdown button"
                        value={phone} onChange={(event) => setPhone(event.target.value)} required />
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="password" placeholder="Password"
                            className="form-control border-success border-2 rounded-pill "
                            value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <div className="col">
                        <input type="password" placeholder="Password"
                            className="form-control border-success border-2 rounded-pill "
                            value={password1} onChange={(event) => setPassword1(event.target.value)} required />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className="col ms-3 form-check">
                        <input type="checkbox" className="form-check-input border-success"
                            id="exampleCheck1" onChange={handleOnChange} />
                        <label className="form-check-label" for="exampleCheck1">
                            Agree to our <a href='#'>Terms and Conditions</a></label>
                    </div>
                </div>
                <div className="d-grid gap-2 col-10 m-2 mx-auto ">
                    <button type="submit" className="btn btn-success" disabled={agreeBtn}
                    >Register</button>
                </div>
            </form>
            <div className='text-center h6 m-2'>
                Already have a account? <a href=''>Log In</a>
            </div>
        </div>
    </div>
}