import React from "react";
import "../Styles/Home.css";
import { Container, Grid, Stack, Avatar, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import shoe from "../images/shoes.jpg"
import { useNavigate } from "react-router";
function HomeView() {
  let navigate = useNavigate();
  const toDetail=()=>{
    navigate("/Detail");
  };  


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
      <Container sx={{ml:"10vw", mr:"10vw", mt:"5vw"}}>
        <Grid container spacing={0}>
          <Grid className="Cards" item sm={12} md={6}>
            <Card sx={{ maxWidth: "40vw" }} onClick={toDetail}>
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
                  <button>9</button>
                  <button>10</button>
                  <button>10.5</button>
                  <button>11</button>
                  <button>12</button>
                  <Typography gutterBottom variant="h5" component="div">
                   Reviews:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @tayler: pretty good sneaker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @Yuxiao: A good purchase
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  see more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className="Cards" item xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: "40vw" }} onClick={toDetail}>
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
                  <button>9</button>
                  <button>10</button>
                  <button>10.5</button>
                  <button>11</button>
                  <button>12</button>
                  <Typography gutterBottom variant="h5" component="div">
                   Reviews:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @tayler: pretty good sneaker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @Yuxiao: A good purchase
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  see more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className="Cards" item xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: "40vw" }} onClick={toDetail}>
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
                  <button>9</button>
                  <button>10</button>
                  <button>10.5</button>
                  <button>11</button>
                  <button>12</button>
                  <Typography gutterBottom variant="h5" component="div">
                   Reviews:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @tayler: pretty good sneaker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @Yuxiao: A good purchase
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  see more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid  xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: "40vw" }} onClick={toDetail}>
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
                  <button>9</button>
                  <button>10</button>
                  <button>10.5</button>
                  <button>11</button>
                  <button>12</button>
                  <Typography gutterBottom variant="h5" component="div">
                   Reviews:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @tayler: pretty good sneaker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @Yuxiao: A good purchase
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  see more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className="Cards" item xs={12} sm={12} md={6}>
            <Card className="Cards" sx={{ maxWidth: "40vw" }} onClick={toDetail}>
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
                  <button>9</button>
                  <button>10</button>
                  <button>10.5</button>
                  <button>11</button>
                  <button>12</button>
                  <Typography gutterBottom variant="h5" component="div">
                   Reviews:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @tayler: pretty good sneaker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @Yuxiao: A good purchase
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  see more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className="Cards" item xs={12} sm={12} md={6}>
            <Card sx={{ maxWidth: "40vw" }} onClick={toDetail}>
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
                  <button>9</button>
                  <button>10</button>
                  <button>10.5</button>
                  <button>11</button>
                  <button>12</button>
                  <Typography gutterBottom variant="h5" component="div">
                   Reviews:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @tayler: pretty good sneaker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    @Yuxiao: A good purchase
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  see more
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}

export default HomeView;
