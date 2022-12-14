import React from 'react';
import img1 from '../../assets/joyyy.jpg';
import './Intro.css';

import { BsGithub, BsLinkedin, BsFillPhoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
// import { GrContact } from 'react-icons/gr';

const Intro = () => {
    return (
        <div className='lg:flex justify-around items-center lg:mx-9 mx-2 lg:my-16 my-11'>

            <div className=' text-center'>
                <img className='h-72 rounded-full lg:my-0 my-5 ml-24' src={img1} alt="" />
                <h1 className='text-3xl text-black font-bold my-3'>MERN Stack Developer</h1>
            </div>

            <div className='bg-black p-8 rounded'>
                <ul>
                    <li>  <a href="mailto: rahulchakrabartyjoy15@gmail.com" title='rahulchakrabartyjoy15@gmail.com' className='flex btn bg-black p-3 rounded my-3 text-white fontStyle items-center gap-2'><HiOutlineMail /> Gmail</a></li>
                    <li> <a href='https://github.com/2ndjoy' className='flex fontStyle btn bg-black p-3 rounded my-3 text-white items-center gap-2'><BsGithub />GitHub</a></li>
                    <li><a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGk5l_BI52WIwAAAYT5Hy3oKxJ2iwlpuCJa0gbZnq8q7jXVtFtc_awRF5F4XAIR4Ts9aUEbnJaGtWkVXpF3pTtkfL4C2_0n0y6MhLd7UtSgE3EUmlPebas-RYgxrDLzAiFga-A=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frahul-chakrabarty-joy-47a95b209%2F' className='flex fontStyle btn bg-black p-3 rounded my-3 text-white items-center gap-2'><BsLinkedin />LinkedIn</a></li>

                    <li><a href="#contact">
                        <button className='btn bg-black p-3 rounded my-3 px-9 fontStyle gap-2'> <BsFillPhoneFill /> Contact</button>
                    </a></li>
                    <li> <a href="https://drive.google.com/file/d/1w90Pq7Nw0CnSbnkiqGZw4jXlql5vOMVX/view?usp=sharing"><button className=' bg-white p-3 rounded my-3 text-black'>Download Resume</button></a></li>
                </ul>
            </div>

        </div>
    );
};

export default Intro;