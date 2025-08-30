import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    list:[],
    List:[],
    products:[]
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        SetProducts:(state,action)=>{
            state.list=action.payload;
            state.List=action.payload;
            state.products=action.payload;
        },
        SetFilterProducts:(state,action)=>{
            if(action.payload==="all"){
                state.products=state.List;
            }
            else{
                state.products = state.List.filter((cv) => cv.categoryId === action.payload);
            }
        },
        SetSortingProducts : (state, action) =>{
            if(action.payload === "all"){
                state.products=state.List;
            }
            else if(action.payload === "name-ascending"){
                state.products = state.list.sort((a,b)=>{
                    var nameA = a.productName.toUpperCase(); // Ignore case
                    var nameB = b.productName.toUpperCase(); // Ignore case
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0; // Names are equal
                });
            }
            else if(action.payload === "name-descending"){
                state.products = state.list.sort((a,b)=>{
                    var nameA = a.productName.toUpperCase(); // Ignore case
                    var nameB = b.productName.toUpperCase(); // Ignore case
                    if (nameB < nameA) {
                        return -1;
                    }
                    if (nameB > nameA) {
                        return 1;
                    }
                    return 0; // Names are equal
                });
            }
            else if(action.payload === "price-ascending"){
                state.products = state.list.sort((a,b)=>{
                    return a.price - b.price;
                });
            }else if(action.payload === "price-descending"){
                state.products = state.list.sort((a,b)=>{
                    return b.price - a.price;
                });
            }
            else if(action.payload === "created-ascending"){
                console.log(action.payload)
                console.log(state.list)
                state.products = state.list.sort((a,b)=>{
                    return new Date(a.createdAt) - new Date (b.createdAt);
                });
            }else if(action.payload === "created-descending"){
                state.products = state.list.sort((a,b)=>{
                    return new Date(b.createdAt) - new Date (a.createdAt);
                });
            }
        }

    }

})


export const {SetProducts, SetFilterProducts, SetSortingProducts} = productSlice.actions;

const productSliceReducer = productSlice.reducer;
export default productSliceReducer;