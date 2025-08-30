import Layout from "../components/Layout/Layout.jsx";
import TitleMetaTag from "../components/Layout/TitleMetaTag.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import ProductList from "../components/ProductList/ProductList.jsx";


const HomePage = () => {
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

            <TitleMetaTag title="Soinik-store,kaptai"/>
            <Layout>
                <ProductList/>
             </Layout>
        </>
    );
};

export default HomePage;