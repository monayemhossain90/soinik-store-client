/* eslint-disable react/prop-types */
import {useDispatch, useSelector} from "react-redux";
import {AddCartItem} from "../../redux/features/cart/cartSlice.js";
import {SuccessToast} from "../../helper/ValidationHelper.js";

const ProductDetails = ({product}) => {
    const {
        _id,
        productName,
        description,
        categoryId,
        price,
        image
    } = product || {};

    const {image_url} = image || {};
    const {categoryName} = categoryId || {};

    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.cart);

    const handleAddToCart = () => {
        const item = {
            productId:_id,
            productName: productName,
            price:price,
            quantity:1,
            total:price,
            image:image_url
        }


        const result = cart.find((cv)=> cv.productId === _id);
        if(!result){
            dispatch(AddCartItem(item));
            SuccessToast("Item Added to cart")
        }
    }



    return (
        <>
            <div className="row container grid grid-cols-1 md:grid-cols-2 gap-8 product-details py-8 mt-[45px]">
                <div className="col-md-6 flex justify-center">
                    <img
                        src={image_url}
                        className="card-img-top rounded h-[280px] w-[320px] sm:w-[350px]"
                        alt="product_img"
                    />
                </div>
                <div className="col-md-6 product-details-info flex flex-col space-y-4">
                    <h1 className="text-center text-2xl font-bold font-serif">Product Details</h1>
                    <hr/>
                    <h6>Name : <span className="text-[#777777]">{productName} </span></h6>
                    <h6>Description : <span className="text-[#777777]">{description} </span></h6>
                    <h6>
                        Price : {price} Tk
                    </h6>
                    <h6>Category : <span className="text-[#777777]">{categoryName} </span></h6>
                    <button onClick={handleAddToCart} className="btn bg-gray-900 text-white px-3 py-2 hover:bg-gray-700 rounded">ADD TO CART
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;