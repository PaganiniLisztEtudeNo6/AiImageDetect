import { useLocation } from "react-router-dom";
import "./style.css";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Transfer() {
  const location = useLocation();
  const { detail, img } = location.state || {};
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const convertBase64ToBlob = (base64Image: string) => {
    const mime = "image/png";
    return base64ToBlob(base64Image, mime);
  };

  function base64ToBlob(base64: string, mime: string) {
    const byteString = atob(base64.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mime });
  }

  useEffect(() => {
    if (img) {
      const imageBlob = convertBase64ToBlob(`data:image/png;base64,${img}`);
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);
    }
  }, [img, convertBase64ToBlob]);

  return (
    <div>
      <Container>
        <div className="h-screen flex items-center justify-center">
          <div className="w-full px-6 py-8 bg-gray-50 border border-gray-200 shadow-xl rounded-lg">
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Sunny Handsome
            </Typography>

            <div className="mt-4 text-center">
              <Typography variant="body1" className="text-gray-700">
                <strong>Detail:</strong> {JSON.stringify(detail, null, 2)}
              </Typography>
            </div>

            {imageUrl && (
              <div className="mt-4">
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
