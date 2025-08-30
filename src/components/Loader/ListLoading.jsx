

const ListLoading = () => {
    const array = [1,2,3,4, 5,6,7,8];
    return (
        <>
            <div className="flex justify-center flex-wrap gap-4 pb-6">
                {
                    array.map((item,i)=>{
                        return(
                            <>
                                <div key={i.toString()} className="card px-4 py-4 rounded-lg shadow-lg w-[18rem] animate-pulse">
                                    <div
                                        className="card-img-top bg-gray-300 h-[280px] rounded-md"
                                    ></div>
                                    <div className="card-body space-y-4 mt-2">
                                        <div className="card-name-price flex justify-between gap-6">
                                            <h5 className="card-title text-gray-300 bg-gray-300 h-[30px] w-[50%] rounded">title</h5>
                                            <h5 className="card-title text-gray-300 bg-gray-300 h-[30px] w-[50%] rounded">
                                                price
                                            </h5>
                                        </div>
                                        <p className="card-text w-full h-[30px] text-gray-300 bg-gray-300 rounded">
                                            item?.description.substring(0, 60)..
                                        </p>
                                        <div className="card-name-price flex justify-between gap-6">
                                            <button
                                                className="btn h-[30px] w-1/2 text-gray-300 bg-gray-300 py-2 rounded"
                                            >
                                                More Details
                                            </button>
                                            <button
                                                className="btn h-[30px] w-1/2 text-gray-300 bg-gray-300 rounded"
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
        </>
    );
};

export default ListLoading;