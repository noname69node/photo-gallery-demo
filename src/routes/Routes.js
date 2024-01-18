import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home/Home";
// import Profile from "../pages/Profile/Profile";
// import Gallery from "../pages/Gallery/Gallery";
import NotFound from "../pages/NotFound/NotFound";

import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Reset from "../components/Auth/Reset";

//import GalleryList from "../components/Gallery/GalleryList";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { auth } from "../config/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLayoutEffect, useState } from "react";

function ProtectedRoutes() {
  return [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        // { path: "profile", element: <Profile /> },
        // {
        //   path: "gallery",
        //   element: <Gallery />,
        //   children: [
        //     { index: true, element: <GalleryList /> },
        //     { path: ":imageId", element: <>with id</> },
        //   ],
        // },
      ],
    },
    { path: "*", element: <NotFound /> },
  ];
}

function PublicRoutes() {
  return [
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { index: true, element: <SignIn /> },
        { path: "register", element: <SignUp /> },
        { path: "reset", element: <Reset /> },
      ],
    },
    { path: "*", element: <Navigate to="/auth" replace /> },
  ];
}

export const Routes = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isAllowed, setIsAllowed] = useState(false);

  useLayoutEffect(() => {
    if (loading) {
      console.log("Loading....");
      return;
    }
    if (user) {
      setIsAllowed(true);
      console.log(user);
    }
  }, [user, loading]);

  // if (user) {
  //   isAllowed = true;
  // }

  console.log(loading);

  const router = createBrowserRouter(
    isAllowed ? [...ProtectedRoutes(), ...PublicRoutes()] : [...PublicRoutes()]
  );

  if (loading) return;

  return <RouterProvider router={router} />;
};
