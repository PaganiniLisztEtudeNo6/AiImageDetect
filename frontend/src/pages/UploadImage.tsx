// UploadImage.js
import React, { useState } from "react";
import { Button, Box } from "@mui/material";

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(file);
    }
  };

  const handleSubmit = () => {
    console.log("Image Submitted");

    if (selectedImage) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const dataUrl = reader.result as string;

        const base64String = dataUrl.split(",")[1];
        console.log("Base64 Image String:", base64String);
      };

      reader.readAsDataURL(new Blob([selectedImage]));
    }
  };

  return (
    <Box textAlign="start" p={2}>
      <input
        accept="image/*"
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <div className="flex justify-between">
        <label htmlFor="upload-button" className="pr-3">
          <Button variant="contained" component="span">
            Upload Image
          </Button>
        </label>
        <label htmlFor="handleSubmit">
          <Button
            variant="contained"
            component="span"
            className="align-item-end"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </label>
      </div>
      {selectedImage && (
        <Box display="flex" alignItems="center" mt={2}>
          <Box mt={2} display="flex" justifyContent="center">
            <div className="flex">
              <Box
                border={1}
                borderColor="grey.300"
                borderRadius="8px"
                p={1}
                width="800px"
                height="500px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
              >
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </div>
          </Box>
        </Box>
      )}
    </Box>
  );
}
