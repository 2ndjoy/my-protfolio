import React from 'react';
import img1 from '../../assets/joyyy.jpg';
import './Intro.css';


const Intro = () => {
    return (
        <div className='lg:flex justify-between items-center lg:mx-9 mx-2 lg:my-5 my-5'>

            <div>
                <ul>
                    <a href="#about"><li className='text-3xl text-black fontStyle font-bold'>About</li></a>
                    <a href="#skills"><li className='text-3xl text-black fontStyle font-bold'>Skills</li></a>
                    <a href="#projects"><li className='text-3xl text-black fontStyle font-bold'>Projects</li></a>
                </ul>
            </div>

            <div className=''>
                <img className='h-72 rounded-full lg:ml-60 lg:my-0 my-5 ml-24' src={img1} alt="" />
                <h1 className='text-3xl text-black  font-bold'>Frontend Developer</h1>
                <p className='text-black'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Inventore quas molestiae eveniet omnis. Est <br /> modi beatae nam numquam illo autem! Quaerat, totam reprehenderit tempore nobis ad deleniti ex vel eos.
                </p>
                <div className='flex justify-center gap-4'>

                    <button className='btn bg-violet-800 p-3 rounded my-3 text-white'>Download Resume</button>
                    <a href="#contact">
                        <button className='btn bg-blue-800 p-3 rounded my-3 text-white'>Contact</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;