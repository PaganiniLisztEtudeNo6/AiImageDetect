// Home.js
import UploadImage from "./UploadImage";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import logo from '../logo/botanica.png';
import { BoldIcon } from "@heroicons/react/24/outline";

export default function Home() {
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src={logo} alt="" width={"100px"} height={"100px"} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div className="h-screen flex items-center justify-center">
          <div className=" px-8 py-8 bg-white border-0 shadow-lg sm:rounded-3xl justify-center">
            <UploadImage />
          </div>
        </div>
      </Container>
      <p style={{ textAlign: "center", fontWeight: "bold", marginBottom: "100px", marginTop: "-20px" }}>ยังไม่สามารถอัพโหลดไฟล์ภาพที่เป็น png</p>
    </div>
  );
}
