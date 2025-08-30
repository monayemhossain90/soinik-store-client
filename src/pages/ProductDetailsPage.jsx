import Layout from "../components/Layout/Layout.jsx";
import {useLocation, useParams} from "react-router-dom";
import {useGetProductQuery, useGetRelatedProductQuery} from "../redux/features/product/productApi.js";
import ProductLoading from "../components/Loader/ProductLoading.jsx";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";
import RelatedLoading from "../components/Loader/RelatedLoading.jsx";
import RelatedProduct from "../components/ProductDetails/RelatedProduct.jsx";
import {useEffect} from "react";


const ProductDetailsPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);


    const {id, catId} = useParams();
    const {data, isLoading} = useGetProductQuery(id);
    const product = data?.data || {};

    const {data:relatedData, isLoading:Loading} = useGetRelatedProductQuery({productId:id, categoryId:catId});
    const relatedProducts = relatedData?.data || {};

    return (
        <>
            <Layout>
                {
                    isLoading ? (
                        <>
                            <ProductLoading/>
                        </>
                    ) : (
                        <>
                            <ProductDetails product={product}/>
                        </>
                    )
                }

                <div className="container py-8">

                    {
                        Loading ? (
                            <>
                                <RelatedLoading/>
                            </>
                        ) : (
                            <>
                                {relatedProducts?.length >0 && (
                                    <>
                                        <h1 className="text-2xl font-bold font-serif pb-2">Similar Products</h1>
                                        <RelatedProduct products={relatedProducts}/>
                                    </>
                                )
                                }
                            </>
                        )
                    }

                </div>
            </Layout>
        </>
);
};

export default ProductDetailsPage;