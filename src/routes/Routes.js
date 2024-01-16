import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Gallery from "../pages/Gallery/Gallery";

import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import Reset from "../components/Auth/Reset";

import GalleryList from "../components/Gallery/GalleryList";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

function ProtectedRoutes() {
  return [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "profile", element: <Profile /> },
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
  const isAllowed = false;

  const router = createBrowserRouter(
    isAllowed ? [...ProtectedRoutes(), ...PublicRoutes()] : [...PublicRoutes()]
  );

  return <RouterProvider router={router} />;
};
