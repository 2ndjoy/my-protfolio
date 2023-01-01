import React from "react";
import html from "../../assets/icons/HTML.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/JavaScript.png";
import bootsrap from "../../assets/icons/Bootsrap.png";
import tailwind from "../../assets/icons/tailwind.png";
import react from "../../assets/icons/react.png";
import node from "../../assets/icons/node.png";
import express from "../../assets/icons/express.png";
import skills from "../../assets/skills.webp";

const MySkills = () => {
  return (
    <div data-aos="fade-right" className="my-12 ">
      <h1 className="text-center text-2xl font-bold">SKILLS</h1>
      <div className="lg:flex grid justify-center gap-3 mt-5">
        <div className="avatar lg:my-0 my-2">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={html} />
          </div>
        </div>
        <div className="avatar lg:my-0 my-2">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={css} />
          </div>
        </div>
        <div className="avatar lg:my-0 my-2">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={js} />
          </div>
        </div>
        <div className="avatar lg:my-0 my-2">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={bootsrap} />
          </div>
        </div>
        <div className="avatar lg:my-0 my-2">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={tailwind} />
          </div>
        </div>
        <div className="avatar lg:my-0 my-2">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={react} />
          </div>
        </div>
        <div className="avatar lg:my-0 my-2">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={node} />
          </div>
        </div>
        <div className="avatar lg:my-0 my-2">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={express} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
