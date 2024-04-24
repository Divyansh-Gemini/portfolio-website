import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Header from "./components/Header/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Header />
        <NotFoundPage />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
