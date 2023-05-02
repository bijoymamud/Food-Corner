import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const [show, setShow] = useState(false);
    const { singIn, setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.form?.pathname || '/';


    const handleLogIn = event => {
        //reload problem solver jonno
        event.preventDefault();


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
            .then(result => {
                const loggesUser = result.user;
                console.log(loggesUser);
                setUser(loggesUser);

                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='w-1/2 mb-96 mt-40
        '>
            <h3 className='text-3xl font-bold font-mono mb-10'>Please Login</h3>

            <form onSubmit={handleLogIn} >
                <div className="form-control container">
                    <label className='font-mono text-xl mb-2 w-1/2 ' htmlFor="">Email</label>
                    <input type="text" placeholder="Enter email" className="input input-bordered input-primary w-full max-w-xs mb-5" />
                    <label className='font-mono text-xl mb-2 w-1/2' htmlFor="">Password</label>
                    <input type="text" placeholder="Enter password" className="input input-bordered input-primary w-full max-w-xs mb-5 " />
                    <p onClick={() => setShow(!show)} >
                        <small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>

                            }
                        </small>
                    </p>



                    <input className='btn btn-wide ' type="submit" value="Log In" />
                    <p className='sub-title mt-4 font-bold text-gray-500'>
                        New to Food-Corner? <Link className='link' to="/register"><span className='text-primary '>Create New Account</span></Link>

                    </p>
                </div>
            </form>
        </div>
    );
};


export default Login;