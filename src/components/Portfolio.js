import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Grid, IconButton } from "@mui/material";
import myimage from "../assets/Roronoa Zoro with swords   One Piece HD desktop wallpaper.jpg";
import Genia from "../assets/Projects/GENIA.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";
const projects = [
  { name: "Chatbot Dashboard", image: Genia },
  { name: "project2", image: myimage },
  { name: "project3", image: myimage },
  { name: "project4", image: myimage },
  { name: "project5", image: myimage },
  { name: "project6", image: myimage },
];

const Portfolio = () => {
  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  const textStyle = {
    color: "white",
  };
  const containerStyle = {
    borderRadius: 16,
    overflow: "hidden",
  };
  return (
    <div
      id="portfolio"
      style={{
        minHeight: "100vh",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} direction={"column"} justifyContent="center">
        <Grid item>
          <Typography variant="h2" style={textStyle}>
            Portfolio:
          </Typography>
          <Typography gutterBottom variant="body1" style={textStyle}>
            Check out some of my work.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          rowSpacing={3}
          columnSpacing={3}
        >
          {projects.map((project, index) => (
            <Grid item key={project.name}>
              <Card
                sx={{
                  width: 290,
                  height: 300,
                  backgroundColor: "transparent",
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={containerStyle}>
                  <CardMedia
                    component="img"
                    height="140"
                    width="300"
                    image={project.image}
                    alt={project.name}
                    sx={{
                      transition: "transform 0.3s",
                      transform: `scale(${hovered === index ? 1.1 : 1})`,
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <CardContent>
                  <Typography
                    style={textStyle}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {project.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton>
                    <VisibilityIcon />
                    <Typography variant="body2">Demo</Typography>
                  </IconButton>
                  <IconButton>
                    <CodeIcon />
                    <Typography variant="body2">Code</Typography>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Portfolio;
