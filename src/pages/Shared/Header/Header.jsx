import React, { useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className='flex items-center justify-between md:mx-auto container'>
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
        </div>
    );
};

export default Header;