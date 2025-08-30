import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    cart:[
        // {
        //     productId:"65d8664bcf72acafd5fb5e92",
        //     productName:"Suzuki Bike",
        //     price: 500,
        //     quantity: 1,
        //     image: "https://res.cloudinary.com/dwok2hmb7/image/upload/v1708716346/Shops/ujmars2klzz7qvra0ciy.jpg",
        //     total: 500
        // },
        // {
        //     productId:"65d866a2cf72acafd5fb5e95",
        //     productName:"Lamburgini",
        //     price: 600,
        //     quantity: 1,
        //     image: "https://res.cloudinary.com/dwok2hmb7/image/upload/v1708716346/Shops/ujmars2klzz7qvra0ciy.jpg",
        //     total: 600
        // },
        // {
        //     productId:"65d869aeb6dac094f2a02cfc",
        //     productName:"Smart Phone",
        //     price: 700,
        //     quantity: 1,
        //     image: "https://res.cloudinary.com/dwok2hmb7/image/upload/v1708716346/Shops/ujmars2klzz7qvra0ciy.jpg",
        //     total: 700
        // }
    ]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        Increment:(state,action)=>{
            const result = state.cart.find((cv)=> cv.productId === action.payload);
            result.quantity=result.quantity+1;
            result.total=result.price*result.quantity;
        },
        Decrement:(state,action)=>{
            const result = state.cart.find((cv)=> cv.productId === action.payload);
            result.quantity=result.quantity-1;
            result.total=result.price*result.quantity;
        },
        AddCartItem: (state,action)=>{
            state.cart.push(action.payload)
        },
        RemoveCartItem:(state, action)=>{
            state.cart.splice(action.payload, 1)
        },
    }

})


export const {Increment, Decrement, AddCartItem, RemoveCartItem} = cartSlice.actions;

const cartSliceReducer = cartSlice.reducer;
export default cartSliceReducer;