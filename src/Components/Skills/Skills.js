import React from 'react';
import html from '../../assets/icons/HTML.png';
import css from '../../assets/icons/css.png';
import js from '../../assets/icons/JavaScript.png';
import bootsrap from '../../assets/icons/Bootsrap.png';
import tailwind from '../../assets/icons/tailwind.png';
import react from '../../assets/icons/react.png';
import node from '../../assets/icons/node.png';
import express from '../../assets/icons/express.png';


<h1 className="text-xl font-bold text-black">Java</h1>
const Skills = () => {
    return (
        <div id='skills' className='grid gap-5 justify-center text-left'>
            <h2 className='text-2xl font-bold mt-11 mb-8'>My Skills</h2>

            <div>
                <img className="h-9" src={html} alt="" />
                <progress className="progress progress-secondary w-56" value="40" max="100"></progress>
            </div>
            <div>
                <img className="h-9" src={css} alt="" />
                <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            </div>
            <div>
                <img className="h-9" src={js} alt="" />

                <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            </div>
            <div>
                <img className="h-9" src={bootsrap} alt="" />

                <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            </div>
            <div>
                <img className="h-9" src={tailwind} alt="" />

                <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            </div>
            <div>
                <img className="h-9" src={react} alt="" />

                <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            </div>
            <div>
                <img className="h-9" src={node} alt="" />
                <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            </div>
            <div>
                <img className="h-9" src={express} alt="" />
                <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            </div>

        </div>
    );
};

export default Skills;