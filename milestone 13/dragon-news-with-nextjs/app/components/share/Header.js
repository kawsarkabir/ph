import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerLogo from "@/public/assets/The Dragon News.png";
import { getCurrentDate } from "../utils/getCurrentDate";

const Header = () => {
  let currentDateInfo = getCurrentDate();
  return (
    <Box className="p-5">
      <Container className="space-y-3">
        <Image src={headerLogo} alt="header logo" className=" mx-auto"></Image>
        <Typography variant="body2" textAlign="center" color="gray">
          Jurnalism without favar and favour
        </Typography>
        <Typography variant="body2" textAlign="center" color="gray">
          {currentDateInfo.day} {currentDateInfo.month} {currentDateInfo.date}
          {currentDateInfo.year}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
