import React from 'react';
import proj1 from '../../assets/proj1.jpg';
import proj2 from '../../assets/proj2.jpg';
import proj3 from '../../assets/proj3.jpg';
const Projects = () => {
    return (
        <div className='lg:flex justify-center gap-4 mt-24' id='projects'>
            <div className="card w-80 bg-violet-100 shadow-xl">
                <figure><img src={proj1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Education Beyond Border</h2>

                    <div className="card-actions justify-center">
                        <a href="https://education-beyond-border.netlify.app/"><button className="btn btn-sm btn-outline">Live Website</button></a>
                        <a href="https://github.com/2ndjoy/education-beyond-border-client"><button className="btn btn-sm btn-outline">GitHub Client</button></a>
                        <a href="https://github.com/2ndjoy/education-beyond-border-server"><button className="btn btn-sm btn-outline">GitHub Server</button></a>
                    </div>
                </div>
            </div>
            <div className="card w-80  bg-violet-100 shadow-xl">
                <figure><img src={proj2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Kather Ghor</h2>

                    <div className="card-actions justify-center">
                        <a href="https://katherghor.netlify.app/"><button className="btn btn-sm btn-outline">Live Website</button></a>
                        <a href="https://github.com/2ndjoy/b612-used-products-resale-clients-side"><button className="btn btn-sm btn-outline">GitHub Client</button></a>
                        <a href="https://github.com/2ndjoy/b612-used-products-resale-server-side"><button className="btn btn-sm btn-outline">GitHub Server</button></a>
                    </div>
                </div>
            </div>
            <div className="card w-80  bg-violet-100 shadow-xl">
                <figure><img src={proj3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Skills Insight</h2>

                    <div className="card-actions justify-center">
                        <a href="https://skills-insight.netlify.app/"><button className="btn btn-sm btn-outline">Live Website</button></a>
                        <a href="https://github.com/2ndjoy/skills-insight-client"><button className="btn btn-sm btn-outline">GitHub Client</button></a>
                        <a href="https://github.com/2ndjoy/skills-insight-server"><button className="btn btn-sm btn-outline">GitHub Server</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;