// Home.js
import UploadImage from "./UploadImage";
import { Container, AppBar , Toolbar, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
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
