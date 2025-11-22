import type { RouteObject } from "react-router-dom";
import MainLayout from "../general/layout/main_layout";
import HomeView from "../modules/home/view/home.view";
import AboutView from "../modules/about/view/about.view";



export default function appRouter(): RouteObject[] {
  return [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomeView />,
            },
            {
                path: "/about-us",
                element: <AboutView />,
            },
        ],
    }
  ];
}
