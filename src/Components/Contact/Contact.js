import React from "react";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="my-9" data-aos="zoom-in-up">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/vwP8dJ4/DALL-E-2022-12-10-01-42-14-A-black-and-white-computer-from-the-90s-in-the-style-of-vaporwave.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div id="contact" className="flex justify-center p-9">
            <form
              action="https://formsubmit.co/rahulchakrabartyjoy15@gmail.com"
              method="POST"
            >
              <div>
                <ul data-aos="fade-right" className="text-lg grid gap-2 mt-5">
                  <a href="https://github.com/2ndjoy" className="btn glass">
                    My GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rahul-chakrabarty-joy-47a95b209/"
                    className="btn glass"
                  >
                    My LinkedIn
                  </a>
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-3" className="btn glass">
                    My Gmail
                  </label>
                  <hr className="my-5" />

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg text-black font-bold">
                        rahulchakrabartyjoy15@gmail.com
                      </h3>{" "}
                      <a
                        href="mailto: rahulchakrabartyjoy15@gmail.com"
                        title="rahulchakrabartyjoy15@gmail.com"
                        className="btn btn-sm mt-1 btn-secondary"
                      >
                        Send Mail
                      </a>
                    </div>
                  </div>
                </ul>
              </div>
              <br />
              <br />
              <div data-aos="fade-left">
                <div>
                  <label className="font-bold" htmlFor="">
                    Your Name:{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full max-w-xs my-2"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold" htmlFor="">
                    Your Email:{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full max-w-xs my-2"
                    required
                  />
                </div>
                <div>
                  <label className="font-bold" htmlFor="">
                    Your Message:{" "}
                  </label>
                  <input
                    type="text"
                    name="message"
                    className="input input-bordered w-full max-w-xs my-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn bg-black p-3 rounded my-3 text-white w-full gap-5"
                >
                  Send <FiSend />
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
