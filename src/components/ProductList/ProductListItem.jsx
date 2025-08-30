/* eslint-disable react/prop-types */
import product_img from "../../assets/images/mobile2.jpg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AddCartItem} from "../../redux/features/cart/cartSlice.js";
import {SuccessToast} from "../../helper/ValidationHelper.js";


const ProductListItem = ({product}) => {
    const {
        _id,
        productName,
        description,
        categoryId,
        price,
        image
    } = product || {};

    const {image_url} = image || {};

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

            <div className="card px-3 py-6 rounded-lg bg-[#80808019] w-[18rem]">
                <img
                    src={image_url || product_img}
                    className="card-img-top h-[200px] rounded-md"
                    alt="product_image"
                />
                <div className="card-body space-y-4 mt-2">
                    <div className="card-name-price flex justify-between">
                        <h5 className="card-title">{productName}</h5>
                        <h5 className="card-title card-price text-green-500 font-bold">
                            {price} Tk
                        </h5>
                    </div>
                    <p className="card-text text-[#5A5959]">
                        {description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price flex justify-between">
                        <Link
                            to={`/product/${_id}/${categoryId}`}
                            className="btn bg-blue-500 text-white hover:bg-blue-700 px-3 py-2 rounded"
                        >
                            More Details
                        </Link>
                        <button
                            onClick={handleAddToCart}
                            className="btn bg-gray-900 text-white px-3 py-2 hover:bg-gray-700 rounded"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductListItem;