import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayouts from "./src/layouts/SharedLayouts";
import Home from "./src/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const ReactRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default ReactRouter;
