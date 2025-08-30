import Layout from "../components/Layout/Layout.jsx";
import { useSearchProductQuery} from "../redux/features/product/productApi.js";
import {useLocation, useParams} from "react-router-dom";
import ListLoading from "../components/Loader/ListLoading.jsx";
import Search from "../components/Search.jsx";
import {useEffect} from "react";


const SearchPage = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    const {keyword} = useParams();
    const {data, isLoading, isError, error} = useSearchProductQuery(keyword);
    const products = data?.data || [];



    return (
        <>
            <Layout>
                {isLoading ? (
                    <>
                        <ListLoading/>
                    </>
                ): (
                    <>
                       <Search products={products}/>
                    </>
                    )
                }
            </Layout>
        </>
    );
};

export default SearchPage;