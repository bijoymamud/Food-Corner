import React, { useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import BannerSection from '../../Banner/BannerSection';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>
            {/* <div className='flex items-center justify-between md:mx-auto container'>
                <div>
                    <h3 className='text-xl'>Food  Corner</h3>
                </div>
                <div  >
                    <Link className='mr-2 md:mx-10' to={'/'}><span className='font-bold'>Home</span></Link>
                    <Link className='mr-2 md:mx-10' to={'/about'}><span className='font-bold'>About</span></Link>
                    <Link className=' mr-2 md:mx-10' to={'/category'}><span className='font-bold'>Category</span></Link>
                    <Link className=' mr-2md:mx-10' to={'blog'}><span className='font-bold'>Blog</span></Link>

                </div>
                <div className='flex items-center gap-5'>
                    {user &&
                        <FaRegUserCircle style={{ fontSize: '2rem', color: "black" }}></FaRegUserCircle>
                    }

                    {user ?
                        <button onClick={handleLogout} className="btn">LogOut</button> :
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>

                    }
                </div>

            </div> */}

            <div className="navbar bg-base-100">
                <div className="navbar-start  mx-auto">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/"><a >Home</a></Link>


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Food Corner</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={'/'}><a className='md:me-5 font-mono text-xl font-bold'>Home</a></Link>
                        <Link to={'/category'} className='md:me-5 font-mono text-xl font-bold' tabIndex={0}>
                            <a>
                                Category

                            </a>

                        </Link>
                        <Link><a className='md:me-5 font-mono text-xl font-bold'> Blog</a></Link>
                        <Link to={'/about'}><a className='md:me-5 font-mono text-xl font-bold'>About</a></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-5'>
                        {user &&
                            <FaRegUserCircle style={{ fontSize: '2rem', color: "black" }}></FaRegUserCircle>
                        }

                        {user ?
                            <button onClick={handleLogout} className="btn">LogOut</button> :
                            <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>

                        }
                    </div>
                </div>
            </div>
            <BannerSection></BannerSection>
        </div>
    );
};

export default Header;