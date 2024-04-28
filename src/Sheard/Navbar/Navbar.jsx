import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut, setClickMenu, clickMenu } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    icon: "success",
                    title: "Logout Successfull"
                });
                // toast.success("You have successfully logged in")
                // console.log(result.user);
            })
            .catch(error => {
                // setLoginError('Email and Password dose not match')
                // toast.error('Email and Password dose not match')
                // console.log(error.message);
            })
    }




    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li ><NavLink to='/register'>Register</NavLink></li>
        {/* <li className={user && 'hidden'}><NavLink to='/login'>Login</NavLink></li>
        <li className={user && 'hidden'}><NavLink to='/register'>Register</NavLink></li> */}
    </>

    return (
        <div className="navbar bg-gradient-to-r from-cyan-500 to-lime-500 text-white shadow-xl rounded-md mb-[50px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black  rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <img className="h-8 w-7 rounded-sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmsWEKsxNSTqVEgVc-409xD6r4pohz-2PpKy4G9DgjQSKLY2BhUKUUj6a9wX3hWa13fo&usqp=CAU" alt="" />Tour Ease</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {
                        navLinks
                    }
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <div className="flex  items-center gap-3 md:gap-6 ">
                        <p className="text-xl font-medium md:font-semibold hidden md:flex">{user.displayName}</p>
                        <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className="h-14 w-14 rounded-full" src={user.photoURL} alt="" /> <div onClick={handleLogOut}><Link to='/login' className="btn text-white bg-gradient-to-r from-cyan-500  to-rose-500 border-none">LogOut</Link></div> </div> :
                        <Link to='/login' className="btn border-none text-white bg-gradient-to-r from-cyan-500  to-rose-500">Login</Link>
                }
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
};

export default Navbar;