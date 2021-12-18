import Home from "../pages/Home"
import Login from "../pages/Login"
import Logout from "../pages/Logout"
import Profile from "../pages/Profile"
import ProfileLayout from "../layout/ProfileLayout"
import NotFound from "../pages/NotFound"

export const routes = [
    {
        id: 'home',
        path: '/',
        exact: true,
        component: <Home />
    },
    {
        id: 'login',
        path: '/login',
        exact: true,
        component: <Login />
    },
    {
        id: 'profile',
        path: '/profile/*',
        exact: true,
        component: <Profile />,
        layout: ProfileLayout
    },
    {
        id: 'profile',
        path: '/logout',
        exact: true,
        component: <Logout />,
        layout: ProfileLayout
    },
    {
        id: 'not-found',
        path: '*',
        component: <NotFound />
    }
]