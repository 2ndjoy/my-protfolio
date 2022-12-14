import React from 'react';
import iambatman from '../../assets/iambatman.webp'
const About = () => {
    return (
        <div id='about' className='mt-36 flex justify-evenly mx-auto px-8 gap-11'>
            <div>
                <img src={iambatman} className="rounded lg:flex hidden" style={{ height: '19vw', width: '99vw' }} alt="" />
            </div>
            <div>
                <p className='text-xl' >
                    <span className='text-2xl font-bold'>Hello, <br />
                        I am Rahul Chakrabarty Joy
                    </span> <br /> <br />
                    I am a CSE undergraduate student.Passionate about Web Development.I have Skilled in Front - end technologies like Html, CSS, Bootstrap, JavaScript, React, and also have basic knowledge in Back - end technologies like MongoDB, NodeJS, ExpressJS.I've completed some full-stack (MERN) web projects and also experienced in working on team projects. I am a self-learner and always try to learn something new and interesting.
                </p >

            </div >
        </div>
    );
};

export default About;