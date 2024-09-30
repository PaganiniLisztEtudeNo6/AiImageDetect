import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import logo from '../logo/botanica.png';

export default function Transfer() {
  const location = useLocation();
  const navigate = useNavigate();
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
    const loadImage = async () => {
      try {
        if (img) {
          const imageBlob = convertBase64ToBlob(`data:image/png;base64,${img}`);
          const imageUrl = URL.createObjectURL(imageBlob);
          setImageUrl(imageUrl);
        }
      } catch (error) {
        console.log("Error:", error);
      } finally {
        console.log("Finally");
      }
    };

    loadImage();
  }, [img]);

  const handleLogoClick = () => {
    navigate("/"); // เปลี่ยนเส้นทางเมื่อคลิกที่โลโก้
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src={logo} alt="" width={"100px"} height={"100px"} onClick={handleLogoClick}/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div className="flex items-center justify-center h-screen grid">
          <div className="max-h-70 w-100 px-24 py-12 bg-white border-0 shadow-lg sm:rounded-3x1">
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
