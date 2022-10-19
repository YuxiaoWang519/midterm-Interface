import React from "react";
import "../Styles/Detail.css";
import { Container, Grid, Stack, Avatar, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import shoe from "../images/shoes.jpg";
import { useNavigate } from "react-router";
function Detail() {

  let navigate = useNavigate();
  const toHome=()=>{
    navigate("/Home");
  };  

  return (
    <>
      <header className="headerNav">
        <div className="fLeft bold navItem" onClick={toHome}>E-Sneaker</div>
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

      <Container>
        <Card sx={{ maxWidth: "80vw" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
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
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
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
             <div> Quantity:</div>
             <input  type="number"></input>
            <Button size="small" color="primary">
              Add to cart
            </Button>
           
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default Detail;
