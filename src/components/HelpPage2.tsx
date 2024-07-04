import React from "react";
import "./help-page.css";
import HelpPage from "./HelpPage";
import { useLocation } from "react-router-dom";

function HelpPage2() {
  const location = useLocation();
  const QrCodePath = String(location.pathname);

  return <HelpPage />;
}

export default HelpPage2;
