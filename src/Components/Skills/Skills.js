import React from 'react';
import html from '../../assets/icons/HTML.png';
import css from '../../assets/icons/css.png';
import js from '../../assets/icons/JavaScript.png';
import bootsrap from '../../assets/icons/Bootsrap.png';
import tailwind from '../../assets/icons/tailwind.png';
import react from '../../assets/icons/react.png';
import node from '../../assets/icons/node.png';
import express from '../../assets/icons/express.png';
import skills from '../../assets/skills.webp';


const Skills = () => {
    return (
        <div id='skills' className='mt-24 mb-8'>
            <h2 className='text-2xl text-center font-bold mb-12'>My Skills</h2>
            <div className='flex justify-evenly'>
                <div>
                    <img src={skills} className="rounded lg:flex hidden" style={{ height: '49vw', width: '29vw' }} alt="" />
                </div>
                <div className='grid gap-5 justify-center text-left'>


                    <div>
                        <img className="h-9" src={html} alt="" />
                        <progress className="progress progress-dark w-96" value="100" max="100"></progress>
                    </div>
                    <div>
                        <img className="h-9" src={css} alt="" />
                        <progress className="progress progress-dark w-96" value="80" max="100"></progress>
                    </div>
                    <div>
                        <img className="h-9" src={js} alt="" />

                        <progress className="progress progress-dark w-96" value="70" max="100"></progress>
                    </div>
                    <div>
                        <img className="h-9" src={bootsrap} alt="" />

                        <progress className="progress progress-dark w-96" value="70" max="100"></progress>
                    </div>
                    <div>
                        <img className="h-9" src={tailwind} alt="" />

                        <progress className="progress progress-dark w-96" value="70" max="100"></progress>
                    </div>
                    <div>
                        <img className="h-9" src={react} alt="" />

                        <progress className="progress progress-dark w-96" value="70" max="100"></progress>
                    </div>
                    <div>
                        <img className="h-9" src={node} alt="" />
                        <progress className="progress progress-dark w-96" value="70" max="100"></progress>
                    </div>
                    <div>
                        <img className="h-9" src={express} alt="" />
                        <progress className="progress progress-dark w-96" value="70" max="100"></progress>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;