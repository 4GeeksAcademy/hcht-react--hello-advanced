import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { BaseHome } from "./pages/BaseHome.jsx";
import { Home } from "./pages/Home.jsx";
import { Single } from "./pages/Single.jsx";
import { Demo } from "./pages/Demo.jsx";


export const router = createBrowserRouter(
    createRoutesFromElements(
      // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
      // Root, on the contrary, create a sister Route, if you have doubts, try it!
      // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
      // Note: The child paths of the BaseHome element replace the Outlet component with the elements contained in the "element" attribute of these child paths.
      <Route path="/" element={<BaseHome />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/single/:theId" element={ <Single />} />
      </Route>
    )
);
