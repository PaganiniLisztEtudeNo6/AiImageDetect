import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import logo from '../logo/botanica.png';

export default function Transfer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { img } = location.state || {};
  const detail = {
    "detail": "ชื่อภาษาไทย : ดอกทานตะวัน\n" +
              "ชื่อภาษาอังกฤษ : Sunflower\n" +
             "ชื่ออื่น : Helianthus\n" +
             "ชื่อวิทยาศาสตร์ : Helianthus annuus\n" +
             "วงศ์ : Acanthaceae\n" +
             "การสื่อสารผ่านดอกไม้ : ดอกทานตะวันสื่อถึงความสุข ความสดใส และความหวัง มักใช้ในการแสดงความขอบคุณและความรัก\n" +
             "สัญลักษณ์ของดอกไม้ : ดอกทานตะวันเป็นสัญลักษณ์ของความเชื่อมั่น ความมั่นคง และการมองโลกในแง่ดี และยังเป็นสัญลักษณ์ของการต้อนรับและการเฉลิมฉลอง\n" +
             "เหมาะกับการใช้งานในโอกาสใด : ใช้ในการจัดงานเฉลิมฉลอง เช่น งานแต่งงาน วันเกิด และงานเทศกาลต่าง ๆ นอกจากนี้ยังใช้ในการประดับตกแต่งบ้านและสวนเพื่อเพิ่มสีสันและความสดใส\n" +
             "ประวัติ : ดอกทานตะวันมีถิ่นกำเนิดในทวีปอเมริกาเหนือ โดยเฉพาะในเม็กซิโก ได้รับการปลูกและใช้ประโยชน์มานานหลายพันปี ทั้งในด้านอาหารและการตกแต่ง\n" +
             "ใบ : ใบของทานตะวันมีลักษณะเป็นรูปไข่หรือทรงกลม ขอบใบเรียบและมีสีเขียวเข้ม ใบมักมีขนาดใหญ่และมีขนละเอียดที่ทำให้รู้สึกหยาบ\n" +
             "ดอก : ดอกทานตะวันมีลักษณะเป็นดอกเดี่ยวขนาดใหญ่ ซึ่งมักมีเส้นผ่านศูนย์กลางถึง 30 เซนติเมตรหรือมากกว่านั้น และยังมีกลีบดอกสีเหลืองสดใส รอบกลางที่เป็นเมล็ดสีเข้ม ซึ่งมักหันหน้าไปทางดวงอาทิตย์\n" +
             "ผล : ผลของทานตะวันเป็นเมล็ดขนาดใหญ่ที่มีรูปร่างกลมเรียกว่า \"achene\" ซึ่งเป็นที่นิยมในการนำไปใช้ทำอาหาร เช่น น้ำมันเมล็ดทานตะวัน\n" +
             "การขยายพันธุ์ : ทานตะวันสามารถขยายพันธุ์ได้โดยการปลูกจากเมล็ด โดยมักจะปลูกในฤดูใบไม้ผลิ การปลูกทานตะวันมักต้องการแสงแดดมากและดินที่มีการระบายน้ำดี",
  };
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
  function cleanText(input: string): string {
    // ลบอักขระพิเศษและปรับปรุงรูปแบบของข้อความ
    return input
        .replace(/[^a-z,A-Z,0-9,ก-ฮ]/g, ' ') // ลบอักขระที่ไม่ต้องการ
        .replace(/\s+/g, ' ') // แทนที่หลายช่องว่างด้วยช่องว่างเดียว
        .trim(); // ตัดช่องว่างด้านหน้าและด้านหลัง
  }
  const cleanedDetail = cleanText(detail.detail);

  console.log(cleanedDetail);
  console.log(detail.detail);
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
              Flower Forever

            </Typography>

            <div className="mt-4">
              <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                <strong>Detail:</strong> {detail.detail}
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
