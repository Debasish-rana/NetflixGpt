import React from "react";
import Loginpage from "./Loginpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";
import { useDispatch } from "react-redux";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage />,
    },
    {
      path: "/Browser",
      element: <Browser />,
    },
  ]);

  const dispatch = useDispatch();

  

  return (
    <div className="Body">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
