import type { RouteObject } from "react-router-dom";
import MainLayout from "../general/layout/main_layout";
import HomeView from "../modules/home/view/home.view";
import AboutView from "../modules/about/view/about.view";
import AcademicView from "../modules/academic/view/academic.view";
import AdmissionView from "../modules/admission/view/admission.view";
import NewsView from "../modules/news/view/news.view";
import StudentAuthView from "../auth/student_auth/view/student_auth.view";



export default function appRouter(): RouteObject[] {
  return [
    {
        path: "/student/portal/login",
        element: <StudentAuthView />,
    },
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
            {
                path: "/academic",
                element: <AcademicView />,
            },
            {
                path: "/admission",
                element: <AdmissionView />,
            },
            {
                path: "/news",
                element: <NewsView />,
            },
        ],
    }
  ];
}
