import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import App from './App';
import Notfoundpage from './Notfoundpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App/>
      </>
    ),
  },
  {
    path: "/omarportfolio",
    element: <><App/></>,
  },
  {
    path: "",
    element: <><App/></>,
  },
  {
    path: "*",
    element: <><Notfoundpage/></>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);