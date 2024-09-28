// Home.js
import UploadImage from "./UploadImage";
import { Container , AppBar, Toolbar, Typography } from "@mui/material";
export default function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src="scanurfather/img/botanica.png" alt="" sizes="" />
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
      <p style={{ textAlign: "center"}}>ยังไม่สามารถอัพโหลดไฟล์ภาพที่เป็น png ได้</p>
    </div>
  );
}
