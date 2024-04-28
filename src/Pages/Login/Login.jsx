
import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import { FaGoogle, FaGithub } from "react-icons/fa6";
import Swal from "sweetalert2";


const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    // console.log('login page', location);

    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [loginSuccess, setLoginSuccess] = useState('')

    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        // reset
        setLoginError('')
        setLoginSuccess('')

        // login User
        loginUser(email, password)
            .then(result => {
                setLoginSuccess("You have successfully logged in")
                Swal.fire({
                    icon: "success",
                    title: "Login Successfull"
                });
                // console.log(result.user);
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setLoginError('Email and Password dose not match')
                toast.error('Email and Password dose not match')
                // console.log(error.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                setLoginSuccess("You have successfully logged in")
                Swal.fire({
                    icon: "success",
                    title: "Login Successfull"
                });
                // console.log(result.user);
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                // setLoginError('Email and Password dose not match')
                // toast.error('Email and Password dose not match')
                // console.log(error.message);
            })

    }


    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                setLoginSuccess("You have successfully logged in")
                Swal.fire({
                    icon: "success",
                    title: "Login Successfull"
                });
                // console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                // setLoginError('Email and Password dose not match')
                // toast.error('Email and Password dose not match')
                // console.log(error.message);
            })
    }

    return (
        <div className={`hero min-h-screen bg-base-200`}>
            <div className="hero-content flex-col md:w-1/2 ">

                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>

                <div className="card shrink-0 w-full shadow-2xl bg-lime-50 ">

                    <form className="card-body mb-0 pb-0" onSubmit={handleLogin}>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input w-full input-bordered" required />

                                <span className="absolute top-4 right-4 cursor-pointe " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <LuEye></LuEye> : <LuEyeOff></LuEyeOff>
                                    }
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt  link link-hover">Forgot password?</a>
                            </label>


                        </div>
                        {
                            loginError && <p className="text-red-500 font-medium pl-1 text-xl ">{loginError}</p>
                        }
                        {
                            loginSuccess && <p className="text-green-500 font-medium text-xl pl-1">{loginSuccess}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn text-white bg-gradient-to-r from-cyan-500  to-rose-500">Login</button>
                        </div>
                    </form>

                    <p className="text-center font-medium mt-6 text-sky-500 text-xl">Or</p>

                    <div className="flex flex-col justify-center gap-4 p-8">
                        <button onClick={handleGoogleLogin} className="text-2xl btn text-white bg-gradient-to-r from-cyan-500  to-rose-500"><FaGoogle></FaGoogle> <span className="text-lg">Login with Google</span> </button>
                        <button onClick={handleGithubLogin} className="text-2xl btn text-white bg-gradient-to-r from-cyan-500  to-rose-500"><FaGithub></FaGithub> <span className="text-lg"> Login with Github</span></button>
                    </div>

                    <p className="text-center">
                        <small>
                            Resido House new? Please <Link to='/register' className="btn btn-link">Register</Link>
                        </small>
                    </p>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;