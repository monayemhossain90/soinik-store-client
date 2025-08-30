import ProductListItem from "./ProductList/ProductListItem.jsx";


const Search = ({products}) => {

    return (
        <>
            <div className="container min-h-[80vh]">
                <div className="py-6">
                    <h1 className="text-2xl text-center font-bold font-serif">Search Results</h1>
                    <h6 className="py-2 text-center mb-5">
                        {products.length < 1
                            ? "No Products Found"
                            : `${products.length} products found`}
                    </h6>
                    <div className="flex justify-center md:justify-start flex-wrap gap-4">

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
                </div>
            </div>
        </>
    );
};

export default Search;