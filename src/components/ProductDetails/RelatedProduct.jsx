import ProductListItem from "../ProductList/ProductListItem.jsx";


const RelatedProduct = ({products}) => {


    return (
        <>

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
        </>
    );
};

export default RelatedProduct;