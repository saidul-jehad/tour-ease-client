import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { LuEye, LuEyeOff } from "react-icons/lu";
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')


    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoUrl = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // reset
        setPasswordError('')
        setRegisterError('')
        setRegisterSuccess('')


        if (password.length < 6) {
            setPasswordError('Password at least 6 character')
            toast.error('Password at least 6 character')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Password you have must one Uppercase')
            toast.error("Password you have must one Uppercase")
            return
        }

        if (!/[a-z]/.test(password)) {
            setPasswordError("Password you have must one Lowercase")
            toast.error("Password you have must one Lowercase")
            return
        }

        // console.log(name, photoUrl, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photoUrl, email)
                setLoading(false)
                setRegisterSuccess('Account successfully created')
                // toast.success('Account successfully created')
                Swal.fire({
                    icon: "success",
                    title: "Account successfully created"
                });
                // console.log(result.user);
            })
            .catch(error => {
                setRegisterError(error.message)
                // console.log(error.message);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:w-1/2">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>

                <div className="card shrink-0 w-full shadow-2xl  bg-lime-50 ">

                    <form className="card-body" onSubmit={handleRegister}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="Enter your photo URL" className="input input-bordered" required />
                        </div>

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
                            {
                                passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt  link link-hover">Forgot password?</a>
                            </label>


                        </div>
                        {
                            registerError && <p className="text-red-500 font-medium pl-1 text-xl ">{registerError.slice(22, 42)}</p>
                        }
                        {
                            registerSuccess && <p className="text-green-500 font-medium text-xl pl-1">{registerSuccess}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn text-white bg-gradient-to-r from-cyan-500  to-rose-500">Register</button>
                        </div>

                    </form>

                    <p className="text-center">
                        <small>
                            Already Have Account? Please <Link to='/login' className="btn btn-link">Login</Link>
                        </small>
                    </p>
                </div>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Register;