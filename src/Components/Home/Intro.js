import React from "react";

const Intro = () => {
  return (
    <div
      data-aos="zoom-in"
      className="hero"
      style={{
        backgroundImage: `url("https://i.ibb.co/fFCm3XD/DALL-E-2022-10-21-08-17-47-sunset-over-man-digital-art.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 data-aos="fade-right" className="mb-5 text-4xl font-bold">
            {" "}
            Rahul Chakrabarty Joy
          </h1>
          <hr className="mb-1" />
          <p className="mb-5 text-lg font-semibold">
            <span className="font-bold text-xl">
              Front End Developer || Javascript || React
            </span>{" "}
            <br />
            <br /> My name is Rahul Chakrabarty Joy. I live in Sylhet,
            Bangladesh. I am very Passionate about Web Development. I am always
            fond of technology and I love to solve problems. I believe that
            through web development I can express my creativity and I can have a
            creative experience. I am Skilled in Front - end technologies like
            Html, CSS, Bootstrap, JavaScript, React, and also have basic
            knowledge in Back - end technologies like MongoDB, NodeJS,
            ExpressJS. I've completed some full-stack (MERN) web projects and
            also experienced in working on team projects. I am a self-learner
            and always try to learn something new and interesting.
          </p>
          <a
            className="btn glass"
            href="https://drive.google.com/file/d/1w90Pq7Nw0CnSbnkiqGZw4jXlql5vOMVX/view?usp=sharing"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
