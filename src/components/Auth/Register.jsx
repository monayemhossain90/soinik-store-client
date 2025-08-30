import {Card, Input, Typography, Button, Spinner} from "@material-tailwind/react";
import {useForm} from "react-hook-form"
import {useEffect} from "react";
import {useRegistrationMutation} from "../../redux/features/auth/authApi.js";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SetRegisterError} from "../../redux/features/auth/authSlice.js";
import Error from "../validation/Error.jsx";

const Register = () => {
    const [registration, {isLoading, isSuccess}] = useRegistrationMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector((state)=> state.auth.RegisterError);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm()



    useEffect(()=>{
        if(isSuccess){
            navigate('/login');
        }
    },[navigate,isSuccess]);

    const onSubmit = (data) =>{
        // console.log(data);
        dispatch(SetRegisterError(""))
        const {firstName,lastName, email, password} = data;
        registration({
            firstName,lastName, email, password
        })
    }



    return (
        <>
            <div className="min-h-[80vh] py-8 mt-1 grid place-items-center form-container">
                <Card color="transparent" className="p-7 bg-white w-[90%] sm:w-[500px]" shadow={true}>
                    <Typography variant="h4" color="blue-gray">
                        Sign Up
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details to register.
                    </Typography>
                    {error && (
                            <>
                                <Error message={error}/>
                            </>

                        )
                    }
                    <br/>
                    <form onSubmit={handleSubmit(onSubmit)}
                          className="py-4 grid grid-cols-1 w-[100%] md:grid-cols-2 gap-6">

                        <div className="w-full">
                            <Input
                                className="w-full"
                                size="lg"
                                type="text"
                                label="First Name"
                                {...register("firstName", {
                                    required: {value: true, message: "First Name is required!"},
                                    minLength: {value: 3, message: "Minimum 3 characters"},
                                    maxLength: {value: 32, message: "Maximum 32 characters"},
                                })}
                                error={Boolean(errors?.firstName?.message)}
                            />
                            {errors?.firstName?.message && (
                                <span className="error-text">{errors?.firstName?.message}</span>
                            )}
                        </div>
                        <div className="w-full">
                            <Input
                                className="w-full"
                                size="lg"
                                type="text"
                                label="Last Name"
                                {...register("lastName", {
                                    required: {value: true, message: "Last Name is required!"},
                                    minLength: {value: 3, message: "Minimum 3 characters"},
                                    maxLength: {value: 32, message: "Maximum 32 characters"},
                                })}
                                error={Boolean(errors?.lastName?.message)}
                            />
                            {errors?.lastName?.message && (
                                <span className="error-text">{errors?.lastName?.message}</span>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <Input
                                size="lg"
                                type="email"
                                label="Email Address"
                                {...register("email",
                                    {
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Enter valid email address"
                                        },
                                    })}
                                error={Boolean(errors?.email?.message)}
                            />
                            {errors?.email?.message && (
                                <span className="error-text">{errors?.email?.message}</span>
                            )}
                        </div>


                        <div>
                            <Input
                                size="lg"
                                label="Password"
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
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Button type="reset" variant="outlined">Reset</Button>
                            {/*<Button type="submit">Create Account</Button>*/}
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
                                            Create Account
                                        </>
                                    )
                                }

                            </Button>
                        </div>

                        <div className="md:col-span-2 flex items-center justify-center">
                            <Link to="/login" className="text-primary underline cursor-pointer">
                                Already have an account? Login
                            </Link>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default Register;