import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSignUp = event => {
        event.preventDefault();
    }

    return (
        <div className='form-container'>
            <h2 className='form-titile'>Sign Up </h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='' placeholder='Your Email address' required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your password' required />
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' placeholder='Your password' required />

                    {/* <input className='signup-btn'>Log In</input> */}

                    <input className='login-btn' type="submit" value="Sign Up" />

                    <p className='sub-title'><small>Already have an account?</small> <Link className='link' to="/login">Login</Link></p>

                    <p className='text-error'>{error}</p>

                </div>
            </form>
        </div>
    );
};

export default Register;