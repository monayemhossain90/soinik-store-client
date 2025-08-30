import {apiSlice} from "../api/apiSlice.js";
import {SuccessToast} from "../../../helper/ValidationHelper.js";
import {setEmail, setOtp, setToken} from "../../../helper/SessionHelper.js";
import {SetForgotError, SetLoginError, SetNewPasswordError, SetRegisterError, SetVerifyOtpError} from "./authSlice.js";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Register Success");
                    }

                }catch(err) {
                    let status = err?.error?.status;
                    let result = err?.error?.data?.data;
                    if(status === 409){
                        dispatch(SetRegisterError(result));
                    }else{
                        dispatch(SetRegisterError(result));
                        // console.log(err)
                    }
                }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    // console.log(res?.meta?.response?.status);
                    if(res?.data?.message === "success"){
                        let MyToken = res.data['token'];
                        setToken(MyToken);
                        SuccessToast("Login Success");
                        setTimeout(()=>{
                            window.location.href="/";
                        },500)
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        dispatch(SetLoginError("Could not Find this Email!"));
                    }else if(status === 400){
                        dispatch(SetLoginError("Wrong Password!"));
                    }else{
                        // dispatch(SetLoginError("Something Went Wrong!"));
                        // console.log(err)
                    }
                }
            }
        }),
        forgotPasswordVerifyEmail: builder.mutation({
            query: (data) => ({
                url: "/auth/forgot-password-verify-email",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    let status = res?.meta?.response?.status;
                    if(status === 200){
                        setEmail(arg.email)
                        // SuccessToast("Success");
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404) {
                        dispatch(SetForgotError("Could not Find this Email!"));
                    } else{
                        // console.log(err)
                    }
                }
            }
        }),
        forgotPasswordVerifyOtp: builder.mutation({
            query: (data) => ({
                url: "/auth/forgot-password-verify-otp",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    let status = res?.meta?.response?.status;
                    if(status === 200){
                        setOtp(arg.otp)
                        // SuccessToast("Success");
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    let result = err?.error?.data?.data;
                    if(status === 400) {
                        dispatch(SetVerifyOtpError(result));
                    } else{
                        // console.log(err)
                    }
                }
            }
        }),
        createNewPassword: builder.mutation({
            query: (data) => ({
                url: "/auth/create-new-password",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    let status = res?.meta?.response?.status;
                    if(status === 200){
                        localStorage.clear()
                        // SuccessToast("Success");
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    let result = err?.error?.data?.data;
                    if(status === 400) {
                        dispatch(SetNewPasswordError(result));
                    } else{
                        // console.log(err)
                    }
                }
            }
        }),
    }),
})


export const {useRegistrationMutation, useLoginMutation, useForgotPasswordVerifyEmailMutation, useForgotPasswordVerifyOtpMutation, useCreateNewPasswordMutation} = authApi;