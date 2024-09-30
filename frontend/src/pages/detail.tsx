
import { useLocation } from "react-router-dom";
import "./style.css";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function transfer() {

  const location = useLocation();
  const { detail , img } = location.state || {};
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const convertBase64ToBlob = (base64Image : string) => {
    const mime = "image/png";
    return base64ToBlob(base64Image, mime);
  };

  const imageBlob = img ? convertBase64ToBlob(`data:image/png;base64,${img}`) : null;


  function base64ToBlob(base64 : string, mime : string)  { 
    const byteString = atob(base64.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) { 
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab] , {type:mime});
  }

  useEffect(() => {
    if (img) {
      const imageBlob = convertBase64ToBlob(`data:image/png;base64,${img}`);
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);
    }
  },[img]);

  return (
    <div>
      <Container>
        <div className="h-screen flex items-center justify-center">
          <div className="w-96 px-14 py-24 bg-white border-0 shadow-lg sm:rounded-3x1">
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Sunny handsome
            
            </Typography>

            <div className="mt-4">
              <Typography variant="body1">
                  <strong>Detail:</strong> {JSON.stringify(detail, null, 2)}
              </Typography>
            </div>

            {imageUrl && (
              <div className="mt-4">
                <img src={imageUrl} alt="Uploaded" className="w-full h-auto"></img>

              </div>
            )}
            

          </div>
        </div>
      </Container>
    </div>
  );
}
