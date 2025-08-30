import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "../../../helper/ValidationHelper.js";
import {SetProducts} from "./productSlice.js";


export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/product/get-all-product`,
            providesTags: ["Products"],
            keepUnusedDataFor: 600,
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    dispatch(SetProducts(res?.data?.data));
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getProduct: builder.query({
            query: (id) => `/product/get-product/${id}`,
            providesTags: (result, error, arg) => [
                {type: "Product", id:arg}, //Dynamic Tag
            ],
            keepUnusedDataFor:600,
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                    // const data = res?.data?.data;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        searchProduct: builder.query({
            query: (keyword) => `/product/search-product/${keyword}`,
            keepUnusedDataFor:600,
            providesTags: (result, error, arg) => [
                {type: "Search", id:arg}, //Dynamic Tag
            ],
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                    // const data = res?.data?.data;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getRelatedProduct: builder.query({
            query: ({productId, categoryId}) => `/product/get-related-product/${productId}/${categoryId}`,
            keepUnusedDataFor:600,
            providesTags: (result, error, arg) => [
                {type: "Related", id:arg.productId+arg.categoryId}, //Dynamic Tag
            ],
            async onQueryStarted(arg, {queryFulfilled, }){
                try{
                    const res = await queryFulfilled;
                    // const data = res?.data?.data;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
    }),
})


export const {useGetProductsQuery,useGetProductQuery, useSearchProductQuery, useGetRelatedProductQuery} = productApi;