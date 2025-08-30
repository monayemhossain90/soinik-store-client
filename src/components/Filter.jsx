import {useGetCategoriesQuery} from "../redux/features/category/categoryApi.js";
import {useDispatch} from "react-redux";
import {SetFilterProducts, SetSortingProducts} from "../redux/features/product/productSlice.js";


const Filter = () => {
    const {data,} = useGetCategoriesQuery();
    const categories = data?.data || [];
    const dispatch = useDispatch();

    const handleFilter = (catId) => {
      dispatch(SetFilterProducts(catId));
    }

    const handleSorting = (value) => {
        dispatch(SetSortingProducts(value));
    }


    return (
        <>
            <div className="flex container flex-col px-5 py-6">
                <div className="flex sm:items-center justify-between mt-3">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
                        <p>Filter by Category</p>
                        <select onChange={(e)=>handleFilter(e.target.value)} className="ml-3 border-2 border-silver bg-white p-1.5">
                            <option value="all" >All</option>
                            {
                                categories.length > 0 && (
                                    categories.map((item)=>{
                                        return(
                                            <>
                                                <option value={item?._id}>{item?.categoryName}</option>
                                            </>
                                        )
                                    })
                                )
                            }
                        </select>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
                        <p>Sort by</p>
                        <select onChange={(e)=>handleSorting(e.target.value)} className="ml-3 border-2 border-silver bg-white p-1.5">
                            <option value="all">Normal</option>
                            <option value="name-ascending">Alphabetically, A-Z</option>
                            <option value="name-descending">Alphabetically, Z-A</option>
                            <option value="price-ascending">Price, low to high</option>
                            <option value="price-descending">Price, high to low</option>
                            <option value="created-ascending">Date, old to new</option>
                            <option value="created-descending">Date, new to old</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;