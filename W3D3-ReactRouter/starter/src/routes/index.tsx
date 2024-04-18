import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import HomeNews from "../pages/HomeNews";
import HomeMessages from "../pages/HomeMessages";
import NewsDetail from "../pages/NewsDetail";
import MessageDetail from "../pages/MessageDetail";
import PageNotFound from "../pages/PageNotFound";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "news",
        element: <HomeNews />,
        children: [
          { path: "detail", element: <NewsDetail /> },
        ],
      },
      {
        path: "messages",
        element: <HomeMessages />,
        children: [
          { path: "detail/:id/:title/:content", element: <MessageDetail /> },
        ],
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "*",
    element: <PageNotFound/>,
  }
];
