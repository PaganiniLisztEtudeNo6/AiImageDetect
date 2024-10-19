import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import { useState, useEffect } from "react";
import logo from '../logo/botanica.png';

export default function Transfer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { detail, img } = location.state || {};

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // State สำหรับเก็บข้อมูลแต่ละบล็อค
  const [thaiName, setThaiName] = useState<string>("");
  const [englishName, setEnglishName] = useState<string>("");
  const [otherName, setOtherName] = useState<string>("");
  const [scientificName, setScientificName] = useState<string>("");
  const [family, setFamily] = useState<string>("");
  const [flowerCommunication, setFlowerCommunication] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [suitableOccasion, setSuitableOccasion] = useState<string>("");
  const [history, setHistory] = useState<string>("");
  const [leaf, setLeaf] = useState<string>("");
  const [flower, setFlower] = useState<string>("");
  const [fruit, setFruit] = useState<string>("");
  const [propagation, setPropagation] = useState<string>("");

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

  // ฟังก์ชันสำหรับแยกข้อมูลออกจาก text block
  const parseFlowerDetails = (details: string) => {
    const lines = details.split('\n'); // แยกข้อมูลเป็นบรรทัด
    lines.forEach(line => {
      const [label, content] = line.split(':').map(item => item.trim()); // แยกข้อมูล label และ content
      const cleanContent = content.replace(/\[|\]/g, '').trim(); // ลบ [] และ trim ข้อมูล
      switch (label) {
        case "[ชื่อภาษาไทย":
          setThaiName(cleanContent);
          break;
        case "[ชื่อภาษาอังกฤษ":
          setEnglishName(cleanContent);
          break;
        case "[ชื่ออื่น":
          setOtherName(cleanContent);
          break;
        case "[ชื่อวิทยาศาสตร์":
          setScientificName(cleanContent);
          break;
        case "[วงศ์":
          setFamily(cleanContent);
          break;
        case "[การสื่อสารผ่านดอกไม้":
          setFlowerCommunication(cleanContent);
          break;
        case "[สัญลักษณ์ของดอกไม้":
          setSymbol(cleanContent);
          break;
        case "[เหมาะกับการใช้งานในโอกาสใด":
          setSuitableOccasion(cleanContent);
          break;
        case "[ประวัติ":
          setHistory(cleanContent);
          break;
        case "[ใบ":
          setLeaf(cleanContent);
          break;
        case "[ดอก":
          setFlower(cleanContent);
          break;
        case "[ผล":
          setFruit(cleanContent);
          break;
        case "[การขยายพันธุ์":
          setPropagation(cleanContent);
          break;
        default:
          break;
      }
    });
  };

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
      }
    };

    loadImage();

    // แยกข้อมูลจาก detail และตั้งค่าให้ state ต่างๆ
    if (detail?.detail) {
      parseFlowerDetails(detail.detail);
    }
  }, [img, detail]);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src={logo} alt="" width={"100px"} height={"100px"} onClick={handleLogoClick} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div className="flex items-center justify-center h-screen grid">
          <div className="max-h-70 w-100 px-24 py-12 bg-white border-0 shadow-lg sm:rounded-3x1">
            <Typography variant="h4" component="h1" gutterBottom align="center">
              {thaiName || "Flower Forever"} {/* แสดงชื่อภาษาไทย */}
            </Typography>

            <div className="mt-4">
              <Typography variant="body1">
                <strong>ชื่อภาษาอังกฤษ:</strong> {englishName}
              </Typography>
              <Typography variant="body1">
                <strong>ชื่ออื่น:</strong> {otherName}
              </Typography>
              <Typography variant="body1">
                <strong>ชื่อวิทยาศาสตร์:</strong> {scientificName}
              </Typography>
              <Typography variant="body1">
                <strong>วงศ์:</strong> {family}
              </Typography>
              <Typography variant="body1">
                <strong>การสื่อสารผ่านดอกไม้:</strong> {flowerCommunication}
              </Typography>
              <Typography variant="body1">
                <strong>สัญลักษณ์ของดอกไม้:</strong> {symbol}
              </Typography>
              <Typography variant="body1">
                <strong>เหมาะกับการใช้งานในโอกาสใด:</strong> {suitableOccasion}
              </Typography>
              <Typography variant="body1">
                <strong>ประวัติ:</strong> {history}
              </Typography>
              <Typography variant="body1">
                <strong>ใบ:</strong> {leaf}
              </Typography>
              <Typography variant="body1">
                <strong>ดอก:</strong> {flower}
              </Typography>
              <Typography variant="body1">
                <strong>ผล:</strong> {fruit}
              </Typography>
              <Typography variant="body1">
                <strong>การขยายพันธุ์:</strong> {propagation}
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
