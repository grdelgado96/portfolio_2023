import React from "react";
import myimage from "../assets/Giselle.jpg";
import {  Typography, Grid, Divider, Button } from "@mui/material";
import { Link } from "react-scroll";
const Home = () => {
  const containerStyle = {
    minHeight: "100vh",
    maxWidth: '1300px', // Puedes ajustar el valor según tus preferencias
    margin: '0 auto', 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
    marginTop:'10px'
   // marginLeft: "50px",
  };
  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
   // marginLeft: '50px',
    color:'white',
  };

  const imageStyle = {
    width: "100%",
    maxWidth: 400,
    borderRadius: "8px",
  };

  const descriptionContainerStyle = {
    textAlign: "center", 
  };
 
  return (
    <div style={containerStyle} id="home">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={5} style={descriptionContainerStyle}>
        <div style={contentContainerStyle}>
            <Typography variant="h3" >
              I'm Giselle Rodriguez
            </Typography>
            <Divider />
            <Typography variant="p">
              I'm a Florida based Front End Developer
            </Typography>
            <Button variant="contained" color="primary" sx={{marginTop: '20px'}}>
            <Link
              activeClass="active"
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Portfolio
            </Link>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={myimage} alt="Imagen" style={imageStyle} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
