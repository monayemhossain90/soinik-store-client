import Layout from "../components/Layout/Layout.jsx";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";
import ContactForm from "../components/Contact/ContactForm.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const ContactPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);


    return (
        <>
            <Layout>
                <div className="min-h-[80vh] py-8 px-4 grid place-items-center form-container mt-1">
                    <div className="container col-12 grid grid-cols-1 md:grid-cols-2 bg-white shadow-md p-7 rounded-md gap-14">
                        <div>
                            <h3 className="contact-title text-3xl font-bold font-serif mb-4">Get in touch with Us</h3>
                            <div>
                                <ul className="space-y-4">
                                    <li className="flex gap-5 items-center">
                                        <AiOutlineHome className="text-2xl"/>
                                        <address className="text-[#777777]">
                                            Kaptai, Rangamati
                                        </address>
                                    </li>
                                    <li className="flex gap-5 items-center">
                                        <BiPhoneCall className="text-2xl"/>
                                        <span className="text-[#777777]"> +88 01789-039597,+88 01521-355029</span>
                                    </li>
                                    <li className="flex gap-5 items-center">
                                        <AiOutlineMail className="text-2xl"/>
                                        <span className="text-[#777777]">kabirhossain1245@gmail.com
</span>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default ContactPage;