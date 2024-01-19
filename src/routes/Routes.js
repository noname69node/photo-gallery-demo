import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Gallery from "../pages/Gallery/Gallery";
import NotFound from "../pages/NotFound/NotFound";

import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Reset from "../components/Auth/Reset";

import GalleryList from "../components/Gallery/GalleryList";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

function ProtectedRoutes() {
  return [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Gallery /> },
        {
          path: "gallery",
          element: <Gallery />,
          children: [
            { index: true, element: <GalleryList /> },
            { path: ":imageId", element: <>with id</> },
          ],
        },
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
  const { user } = useUserAuth();
  const [isAllowed, setIsAllowed] = useState(false);

  useLayoutEffect(() => {
    console.log("Checking or logged in");
    console.log(user);
    if (user) setIsAllowed(true);
  }, [user]);

  console.log("Loading routes");

  const router = createBrowserRouter(
    user ? [...ProtectedRoutes(), ...PublicRoutes()] : [...PublicRoutes()]
  );

  return <RouterProvider router={router} />;
};
