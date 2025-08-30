import {Card, Input, Typography, Button, Spinner} from "@material-tailwind/react";
import { useForm} from "react-hook-form"
import {useCreateNewPasswordMutation} from "../../redux/features/auth/authApi.js";
import {useDispatch, useSelector} from "react-redux";
import Error from "../validation/Error.jsx";
import {SetNewPasswordError} from "../../redux/features/auth/authSlice.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getEmail, getOtp} from "../../helper/SessionHelper.js";

const CreateNewPass = () => {
    const [createNewPassword, {isLoading, isSuccess}] = useCreateNewPasswordMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector((state)=> state.auth.NewPasswordError);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();



    useEffect(()=>{
        if(isSuccess){
            navigate('/login');
        }
    },[navigate,isSuccess]);

    const onSubmit = (data) =>{
        // console.log(data.otp);
        dispatch(SetNewPasswordError(""))
        const {password} = data;
        createNewPassword({
            email:getEmail(),
            otp:getOtp(),
            password:password
        })
    }


    return (
        <>
            <div className="min-h-[80vh] py-8 mt-1 grid place-items-center form-container">
                <Card color="transparent" className="p-7 bg-white w-[90%] sm:w-[450px]" shadow={true}>
                    <Typography variant="h4" color="blue-gray">
                        Create New Password
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter a strong password
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
                                label="New Password"
                                type="password"
                                {...register("password",
                                    {
                                        required: {value: true, message: "Password is required!"},
                                        minLength: {value: 6, message: "password minimum length 6"},
                                        maxLength: {value: 30, message: "password maximum length 30"},
                                        // pattern: {
                                        //     value:
                                        //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                                        //     message: "Password not strong enough",
                                        // },
                                        validate: (val) => {
                                            let NonWhiteSpaceRegex = /^\S*$/;
                                            if (!NonWhiteSpaceRegex.test(val) === true) {
                                                return "Password must not contain Whitespaces!";
                                            }
                                        }
                                    })}
                                error={Boolean(errors?.password?.message)}
                            />
                            {errors?.password?.message && (
                                <span className="error-text">{errors?.password?.message}</span>
                            )}
                        </div>
                        <div>
                            <Input
                                size="lg"
                                type="password"
                                label="Confirm Password"
                                {...register("confirmPass", {
                                    required: {value: true, message: "Confirm password is required!"},
                                    minLength: {value: 6, message: "password minimum length 6"},
                                    maxLength: {value: 30, message: "password maximum length 30"},
                                    validate: ((val) => {
                                        let password = getValues("password");
                                        if (password !== val) {
                                            return "Passwords do not match";
                                        }

                                    })
                                })}
                                error={Boolean(errors?.confirmPass?.message)}
                            />
                            {errors?.confirmPass?.message && (
                                <span className="error-text">{errors?.confirmPass?.message}</span>
                            )}
                        </div>
                        <div className="w-full">
                            <Button disabled={isLoading}
                                    className={`${isLoading && "capitalize"} w-full flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
                                    type="submit">
                                {
                                    isLoading ? (
                                        <>
                                            <Spinner className="h-4 w-4"/> Processing...
                                        </>
                                    ) : (
                                        <>
                                            Create
                                        </>
                                    )
                                }

                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default CreateNewPass;