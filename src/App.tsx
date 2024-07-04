import React from "react";
import "./App.css";
import {
  // BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QrCode1 from "./components/QrCode1";
import HelpPage1 from "./components/HelpPage1";
import HelpPage2 from "./components/HelpPage2";
import HelpPage3 from "./components/HelpPage3";
import HelpPage from "./components/HelpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QrCode1 />,
  },
  {
    path: "/page1",
    element: <HelpPage1 />,
  },
  {
    path: "/page2",
    element: <HelpPage2 />,
  },
  {
    path: "/page3",
    element: <HelpPage3 />,
  },
  {
    path: "/page/:pageId",
    element: <HelpPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
