// Home.js
import Navbar from "./Navbar";
import UploadImage from "./UploadImage";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="h-screen flex items-center justify-center">
          <div className=" px-14 py-24 bg-white border-0 shadow-lg sm:rounded-3xl justify-center">
            <UploadImage />
          </div>
        </div>
      </Container>
    </div>
  );
}
