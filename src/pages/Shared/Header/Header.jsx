import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
            <Link to="/login" className="btn btn-gray">Login

            </Link>
        </div>
    );
};

export default Header;