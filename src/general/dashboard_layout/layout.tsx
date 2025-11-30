/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";



const DashboardLayout = () => {
    const user = useSelector((state: any) => state.auth.user);


  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar role={user?.role} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header  />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-full px-3 py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
