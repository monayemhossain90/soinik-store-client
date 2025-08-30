import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Layout from "../components/Layout/Layout.jsx";
import CreateNewPass from "../components/Auth/CreateNewPass.jsx";


const CreateNewPassPage = () => {
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
                <CreateNewPass/>
            </Layout>

        </>
    );
};

export default CreateNewPassPage;