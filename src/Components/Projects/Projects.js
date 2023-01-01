import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="my-9" data-aos="zoom-out">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/j8xnV5t/DALL-E-2022-12-10-01-43-50-a-futureistic-computer-screen.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="text-center text-neutral-content">
          {" "}
          <h1 className="text-center text-lg font-bold" data-aos="zoom-out">
            MY PROJECTS
          </h1>
          <div className="grid justify-center font-semibold mt-5">
            <ul>
              <a href="https://katherghor.netlify.app/">
                <li data-aos="fade-left" className="my-4 hover:italic">
                  KATHER GHOR
                </li>
              </a>
              <a href="https://education-beyond-border.netlify.app/">
                <li data-aos="fade-right" className="my-4 hover:italic">
                  EDUCATION BEYOND BORDER
                </li>
              </a>

              <a href="https://varay-calito-car-rental-website.vercel.app/">
                <li data-aos="zoom-in" className="my-4 hover:italic">
                  VARAY COLE
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
