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
        <div className='flex justify-evenly mx-auto'>
            <div>
                <h3>Food Corner</h3>
            </div>
            <div  >
                <Link className='mx-10' to={'/'}>Home</Link>
                <Link className='mx-10' to={'/about'}>About</Link>
                <Link className='mx-10' to={'/category'}>Category</Link>
                <Link className='mx-10' to={'blog'}>Blog</Link>

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