import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import "./index.css";
import DIGITAL from "./assets/images/logo.png";
import "remixicon/fonts/remixicon.css";
import TestSession from "./pages/TestSession";
import SaveResultEvaluate from "./pages/SaveResultEvaluate";
import OnlineRevolution from "./pages/OnlineRevolution";
import ShowEvaluateName from "./pages/ShowEvaluateName";
import SaveResultIndividual from "./pages/SaveResultIndividual";
import ShowEvaluateNameResk from "./pages/ShowEvaluateNameResk";
import SaveResultIndividualReskChecker from "./pages/SaveResultIndividualReskChecker";
import ReportResk from "./pages/ReportResk";
import ReportReskChecker from "./pages/ReportReskChecker";
import ShowEvaluator from "./pages/ShowEvaluator";
import SettingFile from "./pages/SettingFile";
import Notification from "./pages/Notification";
const Layout = () => {
  return (
    <>
      <div className="flex flex-row justify-between p-7 bg-white">
        <div>
          <img src={DIGITAL} alt="DIGITAL" />
        </div>
        <div className="flex flex-row gap-8 mt-6">
          <p className="font-bold">
            ยินดีต้อนรับ{" "}
            <span className="text-red-500 font-bold">
              คุณสุประดิษฐ์ เตมีเจตน์
            </span>
          </p>
          <button className="bg-[#133E87] text-white relative bottom-4 px-4 rounded-full">
            <i class="ri-logout-box-r-line"></i> ออกจากระบบ
          </button>
        </div>
      </div>

      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <TestSession /> }, { path: "SaveResultEvaluate", element: <SaveResultEvaluate/> }, { path: "OnlineRevolution", element: <OnlineRevolution/> }, { path: "ShowEvaluateName", element: <ShowEvaluateName/> }, { path: "SaveResultIndividual", element: <SaveResultIndividual/> }, { path: "ShowEvaluateNameResk", element: <ShowEvaluateNameResk/> },{ path: "SaveResultIndividualReskChecker", element: <SaveResultIndividualReskChecker/> },{ path: "ReportResk", element: <ReportResk/> },{ path: "ReportReskChecker", element: <ReportReskChecker/> },{ path: "ShowEvaluator", element: <ShowEvaluator/> },{ path: "SettingFile", element: <SettingFile/> },{ path: "Notification", element: <Notification/> }],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
