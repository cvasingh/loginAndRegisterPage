import React, { useState } from 'react';



export default function Login() {
    const primary = '#207d5c';

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = () => {
        alert(email + ' ' + password);
    };
    return <div className='row justify-content-center'>
        <div className='col-md-8 col-sm-10'>
            <div className='m-3 fw-bolder display-4 text-ska-primary-dark'>
                Log In
            </div>
            <div className='d-grid gap-2 col-10  mx-auto'>
                <button type="button" class="btn btn-outline-ska-primary-dark border-2 rounded-pill">
                    <i className=''></i>
                    Continue with Google</button>
                <div className='text-center h6 text-ska-primary-dark'>OR</div>
            </div>
            <form onSubmit={handleLogIn} action=''>
                <div class="mb-3">
                    <input type="email" placeholder="Email address" value={email} autoFocus
                        class="form-control form-control-lg border-ska-primary-dark border-2 rounded-pill"
                        onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control border-2 rounded-pill form-control-lg border-ska-primary-dark" 
                    placeholder="Password"
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
                    <button type="submit" class="btn btn-ska-primary-dark rounded-pill"
                    >Log In</button>
                </div>
            </form>
            <div className='text-center h6 m-2'>
                Don't have a account? <a href='#'>Register</a>
            </div>
        </div>
    </div>
}
