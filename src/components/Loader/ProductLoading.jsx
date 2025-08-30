

const ProductLoading = () => {
    return (
        <>
            <div className="row container grid grid-cols-1 md:grid-cols-2 gap-8 product-details py-8 mt-[45px]">
                <div className="col-md-6 flex justify-center w-full animate-pulse">
                    <div className="w-[320px] h-[280px] md:h-auto sm:w-[350px] p-5 shadow-lg">
                        <div
                            className="card-img-top rounded bg-gray-300 w-full h-full"
                        >
                        </div>
                    </div>
                </div>
                <div className="col-md-6 product-details-info flex flex-col shadow-lg animate-pulse p-5 space-y-4">
                    <h1 className="btn h-[30px] text-gray-300 bg-gray-300 rounded">Product Details</h1>
                    <h6 className="btn h-[30px] text-gray-300 bg-gray-300 rounded">Name : Product Name</h6>
                    <h6 className="btn h-[30px] text-gray-300 bg-gray-300 rounded">Description : description</h6>
                    <h6 className="btn h-[30px] text-gray-300 bg-gray-300 rounded">
                        Price : $5000
                    </h6>
                    <h6 className="btn h-[30px] text-gray-300 bg-gray-300 rounded">Category : Laptop</h6>
                    <button
                        className="btn h-[30px] text-gray-300 bg-gray-300 rounded"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductLoading;