/* eslint-disable no-unused-vars */
import {useGetProductsQuery} from "../../redux/features/product/productApi.js";
import product_img from "../../assets/images/mobile2.jpg";
import Filter from "../Filter.jsx";
import ProductListItem from "./ProductListItem.jsx";
import ListLoading from "../Loader/ListLoading.jsx";
import {useSelector} from "react-redux";


const ProductList = () => {
    const {data:Data, isLoading, } = useGetProductsQuery();
    const products = useSelector((state)=>state.product.products);
    console.log(products)

    return (
        <>
            <Filter/>
            <div className="grid grid-cols-1">
                <div className="container">

                    {isLoading ? (
                        <>
                            <ListLoading/>
                        </>
                    ): (
                        <>
                            <div className="flex justify-center flex-wrap gap-4 pb-6">

                                {products.length > 0 && (
                                     products.map((item, i) => {
                                        return (
                                            <>
                                                <ProductListItem product={item} key={i.toString()}/>
                                            </>
                                        )
                                    })
                                  )
                                }


                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </>
    );
};

export default ProductList;