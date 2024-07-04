import React from "react";
import "./help-page.css";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import HelpPage from "./HelpPage";

function HelpPage1() {
  const navigate = useNavigate();

  const handleQRCodeClick = () => {
    navigate(QrCodePath);
  };
  const location = useLocation();
  const QrCodePath = String(location.pathname);
  return <HelpPage />;
}

export default HelpPage1;
