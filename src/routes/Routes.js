import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Gallery from "../pages/Gallery/Gallery";
import NotFound from "../pages/NotFound/NotFound";

import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Reset from "../components/Auth/Reset";

import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Profile from "../pages/Profile/Profile";

export const Routes = () => {
  const r = [
    {
      path: "/",
      element: <MainLayout />,
      children: [{ index: true, element: <Gallery /> }],
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { index: true, element: <SignIn /> },
        { path: "register", element: <SignUp /> },
        { path: "reset", element: <Reset /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ];

  const router = createHashRouter(r);

  return <RouterProvider router={router} />;
};
