import {useGetProductsQuery} from "../redux/features/product/productApi.js";
import product_img from '../assets/images/mobile2.jpg';
import ListLoading from "./Loader/ListLoading.jsx";
import {Checkbox} from "antd";
import {useGetCategoriesQuery} from "../redux/features/category/categoryApi.js";


const Home = () => {
    const {data, isLoading, isError, error} = useGetProductsQuery();
    const products = data?.data || [];
    const {data:catData} = useGetCategoriesQuery();
    const categories = catData?.data || [];
    console.log(categories)

    return (
        <>
            <div className="row grid grid-cols-12 my-3">
                <div className="col-md-3 md:col-span-3 pl-5">
                    <h1>Filter By Category</h1>
                    <div className="flex flex-col pl-5">
                        {
                            categories.length > 0 && (
                               categories.map(({categoryName, _id},i)=>{
                                   return(
                                       <>
                                           <Checkbox key={i.toString()}>{categoryName}</Checkbox>
                                       </>
                                   )
                               })
                            )
                        }

                    </div>
                </div>
                <div className="col-md-9 md:col-span-9">
                    <h1 className="text-2xl py-4">All Products</h1>
                    <div className="flex flex-wrap gap-4">
                        {
                            products.length > 0 && products.map((item, i) => {
                                return (
                                    <>
                                        <div className="card px-3 py-6 rounded-lg bg-[#80808019] w-[18rem]"
                                             key={i.toString()}>
                                            <img
                                                src={product_img}
                                                className="card-img-top h-[280px] rounded-md"
                                                alt="product_image"
                                            />
                                            <div className="card-body space-y-4 mt-2">
                                                <div className="card-name-price flex justify-between">
                                                    <h5 className="card-title">{item?.productName}</h5>
                                                    <h5 className="card-title card-price text-green-500 font-bold">
                                                        ${item?.price}
                                                    </h5>
                                                </div>
                                                <p className="card-text text-[#5A5959]">
                                                    {item?.description.substring(0, 60)}...
                                                </p>
                                                <div className="card-name-price flex justify-between">
                                                    <button
                                                        className="btn bg-blue-500 text-white hover:bg-blue-700 px-3 py-2 rounded"
                                                    >
                                                        More Details
                                                    </button>
                                                    <button
                                                        className="btn bg-gray-900 text-white px-3 py-2 hover:bg-gray-700 rounded"
                                                    >
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>

                    {/*<ListLoading/>*/}

                </div>
            </div>
        </>
    );
};

export default Home;