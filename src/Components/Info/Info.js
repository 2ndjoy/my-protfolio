import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/joyf.jpg";
import MySkills from "../Home/MySkills";
const Info = () => {
  return (
    <div className="my-9 py-4">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/Hd0SGn4/DALL-E-2022-12-10-01-41-03-A-black-and-white-website-from-the-90s-in-the-style-of-vaporwave.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="avatar">
              <div data-aos="zoom-in-up" className="w-60 rounded">
                <img src={img} />
              </div>
            </div>
            <p data-aos="zoom-in-left" className="mb-5 text-lg font-semibold">
              My name is Rahul Chakrabarty Joy. I live in Sylhet, Bangladesh. I
              am very Passionate about Web Development. I am always fond of
              technology and I love to solve problems. I believe that through
              web development I can express my creativity and I can have a
              creative experience. I am Skilled in Front - end technologies like
              Html, CSS, Bootstrap, JavaScript, React, and also have basic
              knowledge in Back - end technologies like MongoDB, NodeJS,
              ExpressJS. I've completed some full-stack (MERN) web projects and
              also experienced in working on team projects. I am a self-learner
              and always try to learn something new and interesting. Besides
              that, I love listening to music and watching web series.
            </p>
            <hr className="my-5" />
            <MySkills></MySkills>
            <Link to="/projects" className="btn btn-warning">
              SEE MY PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
