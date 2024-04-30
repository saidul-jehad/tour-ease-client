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
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import UpdateTourists from "../Pages/MyList/UpdateTourists";

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorElement></ErrorElement>,
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
                element: <ProtectedRoute><TouristsSpotDetails></TouristsSpotDetails></ProtectedRoute>,
                loader: () => fetch('https://tour-ease-server.vercel.app/tourists')
            },
            {
                path: '/allTourists',
                element: <AllTouristsSpots></AllTouristsSpots>,
                loader: () => fetch('https://tour-ease-server.vercel.app/tourists')
            },
            {
                path: '/myList',
                element: <ProtectedRoute><MyLists></MyLists></ProtectedRoute>,
                loader: () => fetch('https://tour-ease-server.vercel.app/tourists')

            },
            {
                path: '/myList/update/:id',
                element: <ProtectedRoute> <UpdateTourists></UpdateTourists></ProtectedRoute>,
                loader: ({ params }) => fetch(`https://tour-ease-server.vercel.app/tourists/${params.id}`)

            }


        ]
    }
])


export default Router