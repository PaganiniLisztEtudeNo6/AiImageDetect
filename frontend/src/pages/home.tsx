// Home.js
import UploadImage from "./UploadImage";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import logo from '../logo/botanica.png';

export default function Home() {
  return (
    <div style={{ flexGrow: 1 ,backgroundColor: "#f5f5dc"}}>
      <AppBar position="static" style={{ flexGrow: 1 ,backgroundColor: "#556b2f"}}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src={logo} alt="" width={"100px"} height={"100px"} style={{ display: "inline-block" , cursor: "pointer" }}/> <strong style={{ fontWeight: "bold" , fontSize: "21px"}}>Flower Forever</strong>
          </Typography>
        </Toolbar>
      </AppBar>
      <p style={{ textAlign: "center", fontWeight: "bold" , marginBottom: "-80px" , marginTop: "20px" , fontSize: "30px" ,color: "gray"}}>
        <strong>เว็บไซต์สแกนดอกไม้</strong>
      </p>
      <p style={{ textAlign: "center", fontWeight: "bold", marginBottom: "-150px" , marginTop: "80px" ,color: "red", opacity: "0.5" }}>
      <strong>ยังไม่สามารถอัพโหลดไฟล์ภาพที่เป็น PNG ได้</strong>
      </p>
      <Container>
        <div className="h-screen flex items-center justify-center">
          <div className=" px-8 py-8 bg-white border-0 shadow-lg sm:rounded-3xl justify-center">
            <UploadImage />
          </div>
        </div>
      </Container>
    </div>
  );
} 