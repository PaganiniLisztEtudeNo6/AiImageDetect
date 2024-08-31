// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./style.css";
import { Container, Typography } from "@mui/material";

export default function transfer() {
  return (
    <div>
      <Container>
        <div className="h-screen flex items-center justify-center">
          <div className="w-96 px-14 py-24 bg-white border-0 shadow-lg sm:rounded-3xl">
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Welcome to detail Page
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}
