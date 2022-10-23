import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Root from "../../layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://travel-guru-server-fmyv.vercel.app/destinations"),
      },
      {
        path: "home",
        element: <Home />,
        loader: () =>
          fetch("https://travel-guru-server-fmyv.vercel.app/destinations"),
      },
    ],
  },
]);
