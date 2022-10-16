import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2';

const Contact = () => {

    const [processing, setProcessing] = useState(false);

    const contactFormSubmission = (e) => {
        setProcessing(true);
        e.preventDefault();

        emailjs.sendForm("service_utca3fo",
            "template_52gvx3y",
            e.target,
            "user_g72m85WeSPYPzUWBzxOj8"
        ).then(res => {
            console.log(res);
            if (res.status === 200) {
                Swal.fire(
                    'Message has been sent!',
                    'Please wait for a reply from me',
                    'success'
                )
                e.target.reset();
                setProcessing(false);
            }
            else {
                Swal.fire(
                    'Message could not be sent!',
                    'Please try again later',
                    'error'
                )
                e.target.reset();
                setProcessing(false);
            }
        }).catch(err => {
            console.log(err);
        });

    }


    return (
        <div id="contact" className="bg-slate-100 text-white pb-32 font-serif">
            <h1 className=" pt-24 pb-1 text-4xl font-bold text-slate-700">Contact Me</h1>
            <hr className="py-1 bg-[#65d28d] w-[155px] border-none rounded mb-10 mx-auto" />
            <div className=" bg-gray-500 w-11/12 lg:w-1/2 mx-auto py-5 lg:py-10 rounded-box">
                <form onSubmit={contactFormSubmission} className="flex flex-col w-11/12 lg:w-5/6 mx-auto" action="">
                    <input required className="rounded outline-none text-gray-900 px-5  py-2 my-2" type="text" name="user_name" id="" placeholder="Your Name" />
                    <input required className=" rounded outline-none text-gray-900 px-5 py-2 my-2" type="email" name="user_email" id="" placeholder="Email" />
                    <textarea required className=" text-gray-900 outline-none px-5 pt-5 rounded my-2" name="user_message" placeholder="Type your message" id="" cols="30" rows="5"></textarea>
                    {
                        processing ? <input className="w-40 mx-auto rounded text-black cursor-pointer bg-[#a2f3c0] my-2 py-2" type="submit" value="Sending..." /> :
                            <input className="w-40 mx-auto rounded text-black cursor-pointer bg-[#a2f3c0] my-4  py-2" type="submit" value="SEND" />
                    }
                </form>
            </div>
        </div>
    );
};

export default Contact;