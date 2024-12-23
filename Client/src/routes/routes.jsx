import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Components/Loader/Loader";

const HomePage = lazy(() => import("../Pages/Home/home"));
const Signup = lazy(() => import("../Pages/Auth/Signup"));
const Login = lazy(() => import("../Pages/Auth/Login"));
const ProductsPage = lazy(() => import("../Pages/products/Products"));
const ProductInfoPage = lazy(() => import("../Pages/Productinfo/ProductInfo"));
const CheckOut = lazy(() => import("../Pages/CheckOut/CheckOut"));
const About = lazy(() => import("../Pages/About/About"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));

export const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "Auth/Signup",
    element: (
      <Suspense fallback={<Loader/>}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "Auth/Login",
    element: (
      <Suspense fallback={<Loader/>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/Products",
    element: (
      <Suspense fallback={<Loader/>}>
        <ProductsPage />
      </Suspense>
    ),
  },
  {
    path: "/About",
    element: (
      <Suspense fallback={<Loader/>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/Contact",
    element: (
      <Suspense fallback={<Loader/>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/products-info/",
    element: (
      <Suspense fallback={<Loader/>}>
        <ProductInfoPage />
      </Suspense>
    ),
  },
  {
    path: "/loader",
    element: <Loader/>,
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<Loader/>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/About",
    element: (
      <Suspense fallback={<Loader/>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/Contact",
    element: (
      <Suspense fallback={<Loader/>}>
        <Contact />
      </Suspense>
    ),
  },

  {
    path: "/Products",
    element: (
      <Suspense fallback={<Loader/>}>
        <ProductsPage />
      </Suspense>
    ),
  },

  {
    path: "/products-info/",
    element: (
      <Suspense fallback={<Loader/>}>
        <ProductInfoPage />
      </Suspense>
    ),
  },
  {
    path: "/Checkout",
    element: (
      <Suspense fallback={<Loader/>}>
        <CheckOut />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader/>}>
        <NotFound />
      </Suspense>
    ),
  },
]);
