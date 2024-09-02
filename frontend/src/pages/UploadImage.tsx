import React, { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import ReactLoading from "react-loading";
import { PhotoIcon } from "@heroicons/react/24/outline";

import "./loading.css";
import axios from "axios";

export default function UploadImage() {
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const test = (a: number, b: number, C: string) => {
    if (C === "+") {
      return a + b;
    } else if (C === "-") {
      return a - b;
    }
    return "error";
  };

  const a = test(5, 3, "/");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();

      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        const base64String = dataUrl.split(",")[1];
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (base64Image) {
      setLoading(true);
      try {
        const formData = new FormData();
        const response = await fetch(`data:image/png;base64,${base64Image}`);
        const blob = await response.blob();
        const file = new File([blob], "uploaded_image.png", {
          type: "image/png",
        });
        formData.append("file", file);
        const apiResponse = await axios.post(
          "http://localhost:5000/uploadImage",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Finally block");
      }
    }
  };

  return (
    <Box>
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
          <Button variant="contained" component="span" onClick={handleSubmit}>
            Submit
          </Button>
        </label>
      </div>
      <Box
        position="relative"
        mt={2}
        textAlign="start"
        border={1}
        borderColor="grey.300"
        borderRadius="8px"
        width="800px"
        height="500px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        className={`image-container ${loading ? "fade" : ""}`}
      >
        <Box className={`loader-overlay ${loading ? "visible" : ""}`}>
          <ReactLoading
            type={"cubes"}
            color={"#000000"}
            height={"20%"}
            width={"20%"}
          />
        </Box>
        {!base64Image && !loading && (
          <Box display="flex" flexDirection="column" alignItems="center">
            <PhotoIcon className="h-24 w-24 text-gray-400" />
            <Box mt={1}>Click to upload image</Box>
          </Box>
        )}
        {base64Image && (
          <Box>
            <img
              src={`data:image/png;base64,${base64Image}`}
              alt="Uploaded"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
