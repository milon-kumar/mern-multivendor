import { lazy } from "react";

const AdinLogin = lazy(() => import('../../views/auth/admin/Login.jsx'))
const SellerLogin = lazy(() => import('../../views/auth/seller/Login.jsx'))
const SellerRegister = lazy(() => import('../../views/auth/seller/Register.jsx'))

const publicRoutes = [
    {
        path: "/",
    },{
        path: "/admin/login",
        Component: AdinLogin,
    }, {
        path: "/seller/login",
        Component: SellerLogin,
    }, {
        path: "/seller/register",
        Component: SellerRegister,
    },
]

export default publicRoutes;