import type { RouteObject } from "react-router-dom";
import MainLayout from "../general/layout/main_layout";
import HomeView from "../landing_page/modules/home/view/home.view";
import AboutView from "../landing_page/modules/about/view/about.view";
import AcademicView from "../landing_page/modules/academic/view/academic.view";
import AdmissionView from "../landing_page/modules/admission/view/admission.view";
import NewsView from "../landing_page/modules/news/view/news.view";
import StudentAuthView from "../auth/student_auth/view/student_auth.view";
import MoreView from "../landing_page/modules/more/view/more.view";
import AcademicCalendar from "../landing_page/modules/academic/components/academic_calender";
import AcademicPolicies from "../landing_page/modules/academic/components/academic_policies";
import DashboardLayout from "../general/dashboard_layout/layout";
import DashboardView from "../portals/student_portal/modules/dashboard/view/dashboard.view";



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
                path: "/news-updates",
                element: <NewsView />,
            },
            {
                path: "/more",
                element: <MoreView />,
            },
        ],
    },
    {
        path: "/academic-calendar",
        element: <AcademicCalendar />,
    },
    {
        path: "/academic-policies",
        element: <AcademicPolicies />,
    },
    // {
    //     path: "/student-handbook",
    //     element: <StudentHandbook />,
    // },

    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardView />,
            },
        ],
    },
  ];
}
