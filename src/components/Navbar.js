import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { links } from '../data'
import { FaBarsProgress } from 'react-icons/fa6'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className='container nav_container'>
                <Link>
                    <img src={logo} alt='navLogo'></img>
                </Link>
                <ul className='nav_links'>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <FaBarsProgress></FaBarsProgress>
            </div>
        </nav>
    );
};

export default Navbar;
