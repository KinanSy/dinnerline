import * as React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { css } from "@emotion/react";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />;
}