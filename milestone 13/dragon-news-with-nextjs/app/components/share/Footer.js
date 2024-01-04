"use client";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";
const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "Category",
    pathname: "/categoty",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];
const Footer = () => {
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box className="flex justify-center w-full">
          <IconButton
            sx={{
              "& svg": {
                color: "white",
                margin: "0 5px",
              },
            }}
          >
            <Instagram></Instagram>
            <FacebookRounded></FacebookRounded>
            <Twitter></Twitter>
            <LinkedIn></LinkedIn>
          </IconButton>
        </Box>
        <Box className="flex justify-center w-full">
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                {item.route}
              </Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" textAlign="center" color="gray">
          @2023 copy right design by programing hero and development by kawsar
          kabir
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
