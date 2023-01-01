import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-24">
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.facebook.com/rahul.chakrabartyjoy.3/">
            <FaFacebookF></FaFacebookF>
          </a>
          <a href="https://www.instagram.com/joylogy_01/">
            {" "}
            <FaInstagram></FaInstagram>
          </a>
          <a href="https://twitter.com/Rahul__Joy">
            <FaTwitter></FaTwitter>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
