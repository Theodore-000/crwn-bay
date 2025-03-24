import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home/Home";
import NavBar from "./NavBar";
import Signin from "./SignIn/Signin";
import Shop from "./Home/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Route>
  )
);

const AllRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AllRoutes;
