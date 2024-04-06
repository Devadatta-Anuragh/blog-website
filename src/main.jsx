import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BlogPosts from "./components/BlogPosts.jsx";
import BlogPostPage from "./components/BlogPostPage.jsx";
import SearchResult from "./components/SearchResult.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import AboutPage from "./components/About.jsx";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage.jsx";
import Finance from "./components/Finance.jsx";
import Health from "./components/Health.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <BlogPosts /> },
      {
        path: "/blog-info/:id",
        element: <BlogPostPage />,
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/health",
        element: <Health />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
