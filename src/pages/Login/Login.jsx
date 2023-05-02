import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
        <div>
            <h3>Please Login</h3>

            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' id='' placeholder='Your Email address' required />
                    <label htmlFor="">Password</label>
                    <input type={show ? "text" : "password"} name='password' placeholder='Your password' required />
                    <p onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>

                            }
                        </small>
                    </p>

                    {/* <input className='signup-btn'>Log In</input> */}

                    <input className='login-btn' type="submit" value="Log In" />
                    <p className='sub-title'>
                        New to Food-Corner? <Link className='link' to="/signup">Create New Account</Link>

                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;