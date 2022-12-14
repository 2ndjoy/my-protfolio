import React from 'react';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
    return (

        <div id='contact' className='flex justify-center p-9'>


            <form action="https://formsubmit.co/rahulchakrabartyjoy15@gmail.com" method="POST">
                <div>
                    <label className='font-bold' htmlFor="">Your Name: </label>
                    <input type="text" name="name" className='input input-bordered w-full max-w-xs my-2' required />
                </div>
                <div>
                    <label className='font-bold' htmlFor="">Your Email: </label>
                    <input type="email" name="email" className='input input-bordered w-full max-w-xs my-2' required />
                </div>
                <div>
                    <label className='font-bold' htmlFor="">Your Message: </label>
                    <input type="text" name="message" className='input input-bordered w-full max-w-xs my-2' required />
                </div>
                <button type="submit" className='btn btn bg-black p-3 rounded my-3 text-white w-full gap-5'>Send <FiSend /></button>
            </form>


        </div>

    );
};

export default Contact;