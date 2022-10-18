import React from "react";
import "../Styles/Home.css";
import { Container, Grid, Stack, Avatar, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import shoe from "../images/shoes.jpg"
function homeView(props) {
  return (
    <>
      <header className="headerNav">
        <div className="fLeft bold">E-Sneaker</div>
        <div>
          <div className="fRight margin2 navItem" href="#">
            AboutUs
          </div>
          <div className="fRight margin2 navItem" href="#">
            Cart{" "}
          </div>
          <div className="fRight margin2 navItem" href="#">
            Support
          </div>
        </div>
      </header>
      <main sx={{ml:"10vw"}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: "40vw" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={shoe}
                  alt="green iguana"    
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Nike 300 ----- $160
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <button className="sizeButton"> 9</button>
                    <button className="sizeButton"> 10</button>
                    <button className="sizeButton"> 10.5</button>
                    <button className="sizeButton"> 11</button>
                    <button className="sizeButton"> 12</button>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </main>
    </>
  );
}

export default homeView;
