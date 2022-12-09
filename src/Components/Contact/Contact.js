import React from 'react';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
    return (

        <div id='contact' className='flex justify-center p-9'>
            <form className='w-4/6'>
                <div className='lg:flex gap-4 justify-center'>
                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text font-bold">Enter you email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text font-bold">Enter you Phone </span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control my-3">
                    <label className="label">
                        <span className="label-text font-bold">Tell me your message</span>
                    </label>
                    <input type="text" placeholder="Message" className="input input-bordered" />
                </div>
                <button className="btn btn-primary gap-3">Send Message <FiSend /></button>

            </form>

        </div>

    );
};

export default Contact;