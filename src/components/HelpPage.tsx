import React, { useEffect, useState } from "react";
import "./help-page.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QRCode from "react-qr-code";

const HelpPage: React.FC = () => {
  const [charactersData, setCharactersData] = useState<any>(null);
  const [isValidId, setIsValidId] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { pageId } = useParams<{ pageId: string }>();

  const QrCodePath = String(location.pathname);
  const image = `https://rickandmortyapi.com/api/character/avatar/${pageId}.jpeg`;

  useEffect(() => {
    const fetchRickAndMortyCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character/");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setCharactersData(data);
        if (Number(pageId) > data.info.count) {
          setIsValidId(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRickAndMortyCharacters();
  }, [pageId]);

  const handleQRCodeClick = () => {
    navigate(QrCodePath);
  };

  if (!isValidId) {
    return <h2>ID non valido</h2>;
  }

  return (
    <div className="container" onClick={handleQRCodeClick}>
      <div className="container-qrcode">
        <QRCode value={image} />
      </div>
      <h1 className="qr-code-title">SCANSIONA IL QR CODE!</h1>
      <p>Numero max personaggi: {charactersData.info.count}</p>
    </div>
  );
};

export default HelpPage;
