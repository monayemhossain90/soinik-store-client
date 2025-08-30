import {Card, Input, Typography, Button, Spinner} from "@material-tailwind/react";
import { useForm} from "react-hook-form"
import {
    useForgotPasswordVerifyEmailMutation,
    useForgotPasswordVerifyOtpMutation
} from "../../redux/features/auth/authApi.js";
import {useDispatch, useSelector} from "react-redux";
import Error from "../validation/Error.jsx";
import { SetVerifyOtpError} from "../../redux/features/auth/authSlice.js";
import {useNavigate} from "react-router-dom";
import {getEmail} from "../../helper/SessionHelper.js";
import {useEffect} from "react";
import {HideLoader, ShowLoader} from "../../redux/features/settings/settingsSlice.js";
import {ShowNotification} from "../../helper/ValidationHelper.js";

const VerifyOtp = () => {
    const [forgotPasswordVerifyOtp, {isLoading, isSuccess}] = useForgotPasswordVerifyOtpMutation();
    const [forgotPasswordVerifyEmail, {isLoading:Loading, isSuccess:Success}] = useForgotPasswordVerifyEmailMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector((state)=> state.auth.VerifyOtpError);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();




    useEffect(()=>{
        if(isSuccess){
            navigate('/create-new-pass');
        }
    },[navigate,isSuccess]);

    const onSubmit = (data) =>{
        // console.log(data.otp);
        dispatch(SetVerifyOtpError(""))
        const {otp} = data;
        forgotPasswordVerifyOtp({
            email:getEmail(),
            otp:otp
        })
    }


    //Resend Verification Email
    useEffect(()=>{
        if(Loading){
            dispatch(ShowLoader())
        }else{
            dispatch(HideLoader());
        }
        if(Success){
            ShowNotification("Check Your Email","We have sent you another code.")
        }
    },[dispatch,Loading,Success]);


    const ResendVerifyEmail = () => {
        forgotPasswordVerifyEmail({
            email:getEmail()
        })
    }


    return (
        <>
            <div className="min-h-[80vh] py-8 mt-1 grid place-items-center form-container">
                <Card color="transparent" className="p-7 bg-white w-[90%] sm:w-[450px]" shadow={true}>
                    <Typography variant="h4" color="blue-gray" className="text-center">
                        OTP Verification
                    </Typography>
                    <Typography className="mt-2 font-normal text-[#3c763d] text-center">
                        We have just sent a code to {getEmail()}
                    </Typography>
                    {error && (
                        <>
                            <Error message={error}/>
                        </>

                    )
                    }
                    <br/>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-4 grid grid-cols-1 w-[100%] gap-6">

                        <div>
                            <Input
                                size="lg"
                                type="text"
                                label="Enter Code"
                                autoComplete="off"
                                {...register("otp",
                                    {
                                        required: "OTP is required",
                                        maxLength: {value: 10, message: "Otp must be 6 characters"},
                                    })}
                                error={Boolean(errors?.otp?.message)}
                            />
                            {errors?.otp?.message && (
                                <span className="error-text">{errors?.otp?.message}</span>
                            )}
                        </div>

                        <div className="w-full">
                            <Button disabled={isLoading}
                                    className={`${isLoading && "capitalize"} w-full flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
                                    type="submit">
                                {
                                    isLoading ? (
                                        <>
                                            <Spinner className="h-4 w-4"/> Verifying...
                                        </>
                                    ) : (
                                        <>
                                            Verify
                                        </>
                                    )
                                }

                            </Button>
                        </div>
                        <div
                            className="flex flex-row flex-wrap items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                            <p>Wait two minutes. Didn't recieve code? </p> <span onClick={ResendVerifyEmail} className="flex cursor-pointer flex-row items-center text-blue-600"
                                                           rel="noopener noreferrer">Resend</span>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default VerifyOtp;