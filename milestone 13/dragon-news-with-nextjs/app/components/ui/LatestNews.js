"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import topNews from "@/public/assets/top-news.png";
import topNews2 from "@/public/assets/top-news2.png";

const LatestNews = () => {
  return (
    <Box className="my-5">
      <Card className="my-5">
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} alt="top-news"></Image>
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

      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="top-news"></Image>
              </CardMedia>
              <CardContent>
                <button className="border-none bg-red-400 p-1 px-4 text-white mb-2 rounded">
                  Teachnology
                </button>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin is an innovative payment network
                </Typography>
                <Typography gutterBottom>
                  by kawsar kabir - Mar 18 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="top-news"></Image>
              </CardMedia>
              <CardContent>
                <button className="border-none bg-red-400 p-1 px-4 text-white mb-2 rounded">
                  Teachnology
                </button>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin is an innovative payment network
                </Typography>
                <Typography gutterBottom>
                  by kawsar kabir - Mar 18 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews2} alt="top-news"></Image>
              </CardMedia>
              <CardContent>
                <button className="border-none bg-red-400 p-1 px-4 text-white mb-2 rounded">
                  Teachnology
                </button>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin is an innovative payment network
                </Typography>
                <Typography gutterBottom>
                  by kawsar kabir - Mar 18 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                <Image src={topNews} alt="top-news"></Image>
              </CardMedia>
              <CardContent>
                <button className="border-none bg-red-400 p-1 px-4 text-white mb-2 rounded">
                  Teachnology
                </button>
                <Typography gutterBottom variant="h5" component="div">
                  Bitcoin is an innovative payment network
                </Typography>
                <Typography gutterBottom>
                  by kawsar kabir - Mar 18 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
