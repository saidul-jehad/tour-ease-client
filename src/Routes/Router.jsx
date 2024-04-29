import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddTourists from "../Pages/AddTourists/AddTourists";

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
                element: <AddTourists></AddTourists>
            }
        ]
    }
])


export default Router