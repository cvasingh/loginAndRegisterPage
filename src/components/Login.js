import React, { useState } from 'react';



export default function Login() {
    const primary = '#207d5c';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = () => {
        notification(email + ' ' + password, 'danger');
        alert(email + ' ' + password);
    };

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
                Log In
            </div>
            <div className='d-grid gap-2 col-10  mx-auto'>
                <button type="button" class="btn btn-outline-success border-3">
                    <i className=''></i>
                    Continue with Google</button>
                <div className='text-center h6' style={{ color: `${primary}` }}>OR</div>
            </div>
            <form onSubmit={handleLogIn} action=''>
                <div class="mb-3">
                    <input type="email" placeholder="Email address" value={email} autoFocus
                        class="form-control form-control-lg border-success border-2 rounded-pill"
                        onChange={(event) => setEmail(event.target.value)}
                        required />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control border-2 rounded-pill form-control-lg border-success" placeholder="Password"
                        value={password} onChange={(event) => setPassword(event.target.value)} required />
                </div>
                <div className='row mb-3'>
                    <div class="col-md ms-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>
                    <div className='col-md text-end'>
                        <a href='#'>Forgot Password?</a>
                    </div>
                </div>
                <div class="d-grid gap-2 col-10 m-2 mx-auto ">
                    <button type="submit" class="btn btn-success"
                    >Log In</button>
                </div>
            </form>
            <div className='text-center h6 m-2'>
                Don't have a account? <a href='#'>Register</a>
            </div>
        </div>
    </div>
}
