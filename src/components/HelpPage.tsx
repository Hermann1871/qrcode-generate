import React from "react";
import "./help-page.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QRCode from "react-qr-code";

function HelpPage() {
  const navigate = useNavigate();

  const handleQRCodeClick = () => {
    navigate(QrCodePath);
  };
  const location = useLocation();
  const QrCodePath = String(location.pathname);

  const { pageId } = useParams();
  const image = `https://rickandmortyapi.com/api/character/avatar/${pageId}.jpeg`;

  return (
    <>
      <div className="container" onClick={handleQRCodeClick}>
        {/* <QRCode value={`http://localhost:3000${QrCodePath}`} /> */}
        {/* <QRCode value={`https://rickandmortyapi.com/api/character/${pageId}`} /> */}
        <div className="container-qrcode">
          <QRCode value={image} />
        </div>
        <h1 className="qr-code-title">SCANSIONA IL QR CODE!</h1>
        {/* <h1>{`https://rickandmortyapi.com/api/character/${pageId}`}</h1> */}
      </div>
    </>
  );
}

export default HelpPage;
