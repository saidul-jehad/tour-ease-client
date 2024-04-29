import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddTourists from "../Pages/AddTourists/AddTourists";
import TouristsSpotDetails from "../Pages/Home/TouristsSpot/TouristsSpotDetails";
import AllTouristsSpots from "../Pages/AllTouristsSpots/AllTouristsSpots";
import ProtectedRoute from "./ProtectedRoute";
import MyLists from "../Pages/MyList/MyLists";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addTourists',
                element: <ProtectedRoute><AddTourists></AddTourists></ProtectedRoute>
            },
            {
                path: '/touristsSpotDetails/:id',
                element: <TouristsSpotDetails></TouristsSpotDetails>,
                loader: () => fetch('http://localhost:5000/tourists')
            },
            {
                path: '/allTourists',
                element: <AllTouristsSpots></AllTouristsSpots>,
                loader: () => fetch('http://localhost:5000/tourists')
            },
            {
                path: '/myList',
                element: <MyLists></MyLists>
            }


        ]
    }
])


export default Router