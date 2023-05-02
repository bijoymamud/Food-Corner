import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('');

        //here password validation
        if (password !== confirm) {
            //match na hle error dewa uchit. r error dite hle state declare korte hoy.
            setError('Password not matched')
            return;

        }
        else if (password.length < 6) {
            setError('Password should be atleast 6 characters')
            return;

        }

        createUser(email, password)
            .then(result => {
                const loggesUser = result.user;
                console.log(loggesUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div className='w-1/2 mb-96 mt-40
       '>
            <div className='form-container'>
                <h2 className='form-titile text-3xl font-bold font-mono mb-10'>Sign Up </h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="">Email</label>
                        <input type="text" name='email' placeholder="Enter email" className="input input-bordered input-primary w-full max-w-xs mb-5" required />
                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="">Photo URL</label>
                        <input type="text" name='photo' placeholder="Your URL" className="input input-bordered input-primary w-full max-w-xs mb-5" required />
                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter email" name='password' className="input input-bordered input-primary w-full max-w-xs mb-5" required />

                        <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="confirm">Confirm Password</label>
                        <input type="text" placeholder="Enter email" name='confirm' className="input input-bordered input-primary w-full max-w-xs mb-5" required />

                        {/* <input className='signup-btn'>Log In</input> */}

                        <input className='btn btn-wide ' type="submit" value="Register" />

                        <p className='sub-title sub-title mt-4 font-bold text-gray-500'>Already have an account? <Link className='link' to="/login"><span className='text-primary '>Login</span></Link></p>

                        <p className='text-error'>{error}</p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;