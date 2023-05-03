import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Main from "../layouts/Main";
import RecipiLayout from "../layouts/recipiLayout/RecipiLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import ViewReceipe from "../pages/ViewReceipe/ViewReceipe";

import OurCheif from "../pages/ourCheif/OurCheif";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>

            },

            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },

    {
        path: 'home',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <OurCheif></OurCheif>
            },

        ]
    },

    {
        path: 'allCheifs',
        element: <PrivateRoutes>
            <RecipiLayout></RecipiLayout>
        </PrivateRoutes>,
        children: [
            {
                path: ':id',
                element: <ViewReceipe></ViewReceipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/allCheifs/${params.id}`)
            }
        ]
    }
])

export default router;