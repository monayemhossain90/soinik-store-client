import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    modalOpen: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        SetModalOpen:(state,action)=>{
            state.modalOpen=action.payload
        },
    }

})


export const {SetModalOpen} = modalSlice.actions;

const modalSliceReducer = modalSlice.reducer;
export default modalSliceReducer;