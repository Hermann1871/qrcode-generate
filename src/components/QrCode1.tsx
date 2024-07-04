import QRCode from "react-qr-code";
import "./qrcode1.css";
import { useNavigate } from "react-router-dom";

function QrCode1() {
  const navigate = useNavigate();

  const handleQRCodeClick = () => {
    navigate("/page1");
  };

  return (
    <div className="qrcode" onClick={handleQRCodeClick}>
      <QRCode value="http://localhost:3000/page1" />
      <h1>SCANSIONA IL QR CODE!</h1>
    </div>
  );
}

export default QrCode1;
