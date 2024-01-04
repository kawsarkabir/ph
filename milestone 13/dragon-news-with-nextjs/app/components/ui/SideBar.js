"use client"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import sideBarImage from "@/public/assets/side-bottom-img.png"

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarImage} alt="top-news"></Image>
          </CardMedia>
          <CardContent>
            <button className="border-none bg-red-400 p-1 px-4 text-white mb-2 rounded">
              Teachnology
            </button>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin is an innovative payment network
            </Typography>
            <Typography gutterBottom>by kawsar kabir - Mar 18 2024</Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
