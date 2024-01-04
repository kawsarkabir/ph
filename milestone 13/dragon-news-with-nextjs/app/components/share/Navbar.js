"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { IconButton } from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
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

function Navbar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} alt="logo"></Image>
          <Box className="flex justify-center w-full">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          {/* social menu navbar  */}
          <Box>
            <IconButton color="inherit" className="space-x-3">
              <Instagram></Instagram>
              <FacebookRounded></FacebookRounded>
              <Twitter></Twitter>
              <LinkedIn></LinkedIn>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
