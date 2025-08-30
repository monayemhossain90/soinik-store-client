import Layout from "../components/Layout/Layout.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AiFillDelete} from "react-icons/ai";
import {Table} from "antd";
import {Decrement, Increment, RemoveCartItem} from "../redux/features/cart/cartSlice.js";
import OrderModal from "../components/modal/OrderModal.jsx";
import {SetModalOpen} from "../redux/features/modal/modalSlice.js";
import {ErrorToast, ShowNotification} from "../helper/ValidationHelper.js";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Image",
        dataIndex: "image",
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Action",
        dataIndex: "action",
    }
]


const CartPage = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    const cart = useSelector((state)=>state.cart.cart);
    const subTotal = useSelector((state)=>{
        const carts = state.cart.cart;
        //totalPrice
        return carts.reduce((pv,cv)=>{
            return pv + (cv.quantity * cv.price)
        },0)
    });



    let tableData=[];

    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            tableData.push({
                key: Number(i + 1),
                name: cart[i]?.productName,
                image: (
                    <>

                        <img className="w-[60px] h-[60px]" src={cart[i]?.image} alt="product_img" />
                    </>
                ),
                price: cart[i]?.total,
                quantity: (
                    <>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={()=>dispatch(Decrement(cart[i]?.productId))}
                                disabled={cart[i]?.quantity===1}
                                className="bg-blue-500 hover:bg-blue-700 px-4 text-3xl py-1 disabled:cursor-not-allowed text-white font-bold text-md rounded-md">
                                -
                            </button>
                            <span className="text-2xl">{cart[i]?.quantity} </span>
                            <button
                                onClick={()=>dispatch(Increment(cart[i]?.productId))}
                                disabled={cart[i]?.quantity===10}
                                className="bg-blue-500 hover:bg-blue-700 px-4 text-3xl py-1 disabled:cursor-not-allowed text-white font-bold text-md rounded-md">
                                +
                            </button>
                        </div>
                    </>
                ),
                action: (
                    <>
                        <button
                            onClick={()=>dispatch(RemoveCartItem(i))}
                            className="bg-red-500 hover:bg-red-700 px-2 py-2 text-white font-bold text-md rounded-md">
                            <AiFillDelete size={25}/>
                        </button>
                    </>
                )
            });
        }

    }


    return (
        <>
            <Layout>
                <div className="container min-h-[50vh] grid grid-cols-1 lg:grid-cols-12 mt-[60px] py-6 gap-6">

                    {/*summary*/}
                    {tableData?.length >0 ? (
                        <>
                            <div className="lg:col-span-9">
                                <h1 className="text-center text-3xl font-bold mb-3">Cart Products</h1>
                                <div className="w-auto overflow-x-auto">
                                    <Table columns={columns} dataSource={tableData}/>
                                </div>
                            </div>
                            <div className="lg:col-span-3 lg:mt-12">
                                <div
                                    className="p-5 flex flex-col flex-[0.4] w-auto h-[20vh] border-2 border-[#8a4af3] rounded-md shadow-lg">
                                    <h1 className="text-3xl text-center">Summary</h1>
                                    <div className="flex justify-between w-full mt-3 text-2xl font-bold">
                                        <p>Total:</p>
                                        <p>{Number(subTotal)} Taka</p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center pt-3">
                                    <button
                                        onClick={() => {
                                            dispatch(SetModalOpen(true));
                                        }}
                                        className="btn bg-gray-900 text-white px-3 py-2 hover:bg-gray-700 rounded"
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-span-12 grid place-items-center">
                                <h1 className="text-center text-2xl md:text-3xl font-bold mb-3">There is no cart Products</h1>
                            </div>
                        </>
                    )
                    }

                </div>
            </Layout>

            <OrderModal/>
        </>
    );
};

export default CartPage;