import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Header = () => {
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <a href='https://github.com/2ndjoy'><BsGithub />GitHub</a></li>
                        <li><a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGk5l_BI52WIwAAAYT5Hy3oKxJ2iwlpuCJa0gbZnq8q7jXVtFtc_awRF5F4XAIR4Ts9aUEbnJaGtWkVXpF3pTtkfL4C2_0n0y6MhLd7UtSgE3EUmlPebas-RYgxrDLzAiFga-A=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frahul-chakrabarty-joy-47a95b209%2F'><BsLinkedin />Linked In</a></li>
                    </ul>
                </div>
                <a href="mailto: rahulchakrabartyjoy15@gmail.com" className='flex items-center gap-2 text-gray-800'><HiOutlineMail /> rahulchakrabartyjoy15@gmail.com</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <a href='https://github.com/2ndjoy'><BsGithub />GitHub</a></li>
                    <li><a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGk5l_BI52WIwAAAYT5Hy3oKxJ2iwlpuCJa0gbZnq8q7jXVtFtc_awRF5F4XAIR4Ts9aUEbnJaGtWkVXpF3pTtkfL4C2_0n0y6MhLd7UtSgE3EUmlPebas-RYgxrDLzAiFga-A=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frahul-chakrabarty-joy-47a95b209%2F'><BsLinkedin /> Linked In</a></li>
                </ul>
            </div>

        </div>


    );
};

export default Header;  