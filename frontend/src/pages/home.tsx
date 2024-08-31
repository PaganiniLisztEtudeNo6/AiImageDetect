// Home.js
import UploadImage from "./UploadImage";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <div>
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
