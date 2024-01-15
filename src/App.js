import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Reset from "./components/Auth/Reset";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Gallery from "./pages/Gallery/Gallery";

import GalleryList from "./components/Gallery/GalleryList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route index element={<GalleryList />} />
            <Route path=":imageId" element={<>with id</>} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="reset" element={<Reset />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
