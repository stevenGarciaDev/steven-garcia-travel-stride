import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import ProjectPage from "../pages/ProjectPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "project", element: <ProjectPage /> },
        ],
    },
]);

export default router;
