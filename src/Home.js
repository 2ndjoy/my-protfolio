import React from 'react';
import { AiFillProject } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

const Home = () => {
    return (
        <div>

            <Intro></Intro>

            <About></About>
            <Skills></Skills>

            <h2 id='projects' className='text-2xl font-bold mt-24 flex items-center justify-center gap-3'>My Projects <AiFillProject /></h2>
            <Projects></Projects>

            <h2 className='text-2xl font-bold mt-24 flex justify-center items-center gap-3'>Contact Me <GrContact /></h2>
            <Contact></Contact>

        </div>
    );
};

export default Home;        