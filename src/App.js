import React, { lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
// import Grocery from "./components/Grocery";

//lazy loading

const Grocery = lazy(() => import("./components/Grocery"))
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Groceries are on the way</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
