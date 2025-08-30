import {Button, Spinner} from "@material-tailwind/react";
import {useContactCreateMutation} from "../../redux/features/contact/contactApi.js";
import {useEffect, useState} from "react";
import {SuccessToast} from "../../helper/ValidationHelper.js";


const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [contactCreate, {isLoading, isSuccess}] = useContactCreateMutation();


    useEffect(()=>{
        if(isSuccess){
            setName("");
            setEmail("");
            setMessage("");
            SuccessToast("Send Success")
        }
    },[isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();
        contactCreate({
            name, email,  message
        })
    }


    return (
        <>
            <div>
                <h3 className="contact-title text-3xl font-bold font-serif mb-4">Contact</h3>
                <form onSubmit={handleSubmit} className="form space-y-5">
                    <div>
                        <input onChange={(e)=>setName(e.target.value)} value={name} type="text"
                               className="form-control w-full px-3 py-2 bg-[#f5f5f7] focus:outline-none rounded-lg placeholder:text-gray-600"
                               placeholder="Enter full name" required/>
                    </div>
                    <div>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"
                               className="form-control w-full px-3 py-2 bg-[#f5f5f7] focus:outline-none rounded-lg placeholder:text-gray-600"
                               placeholder="Enter your email address" required/>
                    </div>
                    <div>
                                    <textarea
                                        onChange={(e)=>setMessage(e.target.value)} value={message}
                                        className="form-control w-full px-3 py-2 bg-[#f5f5f7] focus:outline-none rounded-lg placeholder:text-gray-600"
                                        cols="30" rows="4" placeholder="Write a message..." required></textarea>
                    </div>
                    <div>
                        <Button disabled={isLoading}
                                className={`${isLoading && "capitalize"} w-full flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
                                type="submit">
                            {
                                isLoading ? (
                                    <>
                                        <Spinner className="h-4 w-4"/> Sending...
                                    </>
                                ) : (
                                    <>
                                        Submit
                                    </>
                                )
                            }

                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;