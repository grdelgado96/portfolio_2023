import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Grid, IconButton } from "@mui/material";
import Genia from "../assets/Projects/GENIA.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";
import FoodOrder from "../assets/Projects/FoodOrder.png";
import ReduxCart from "../assets/Projects/ReduxCart.png";
import Calculator from "../assets/Projects/InvestmentCalculator.png";
import Moviefetch from "../assets/Projects/MovieFetch.png";
import ReactRouter from "../assets/Projects/ReactRouter.png";
import Events from "../assets/Projects/Events.png";
import EventSite from "../assets/Projects/EventSite.png";
const projects = [
  {
    name: "Chatbot Dashboard",
    image: Genia,
    link: "http://chatbot-demo-bucket.s3-website.eu-central-1.amazonaws.com",
  },
  {
    name: "Food Order App",
    image: FoodOrder,
    link: "https://foodorder-app-react.netlify.app",
  },
  {
    name: "Events",
    image: Events,
    link: "https://events-react-app1.netlify.app",
  },
  {
    name: "Events Site",
    image: EventSite,
    link: "https://events-site-react.netlify.app",
  },
  {
    name: "Redux Cart",
    image: ReduxCart,
    link: "https://redux-cart-react.netlify.app",
  },
  {
    name: "Investment Calculator",
    image: Calculator,
    link: "https://investmentcalculator-react.netlify.app",
  },
  {
    name: "Movie Fetch",
    image: Moviefetch,
    link: "https://fetch-movies-react.netlify.app",
  },
  {
    name: "React Router Example",
    image: ReactRouter,
    link: "https://react-router-simple-example.netlify.app",
  },
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
        minHeight: "70vh",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
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
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
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
                  <IconButton
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <VisibilityIcon />
                    <Typography variant="body2">Demo</Typography>
                  </IconButton>
                  {/* <IconButton> 
                    <CodeIcon />
                    <Typography variant="body2">Code</Typography>
                  </IconButton> */}
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
