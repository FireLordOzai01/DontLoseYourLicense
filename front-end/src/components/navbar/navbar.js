import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-container">
            <h1 className="logo-name">BookIt 2.0</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/more-books'>More Books</Link>
                <Link to='/admin'>Admin</Link>
            </nav>
        </div>
    )
}

export default Navbar;