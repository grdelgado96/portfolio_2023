import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, Grid, IconButton } from "@mui/material";
import Genia from "../assets/Projects/GENIA.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FoodOrder from "../assets/Projects/FoodOrder.png";
import ReduxCart from "../assets/Projects/ReduxCart.png";
import Calculator from "../assets/Projects/InvestmentCalculator.png";
import Moviefetch from "../assets/Projects/MovieFetch.png";
import ReactRouter from "../assets/Projects/ReactRouter.png";
import Events from "../assets/Projects/Events.png";
import EventSite from "../assets/Projects/EventSite.png";
import CountdownGame from "../assets/Projects/CountdownGame.png";
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
    name: "Countdown Game",
    image: CountdownGame,
    link: "https://countdown-game-react.netlify.app",
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

// const Portfolio = () => {
//   const [hovered, setHovered] = React.useState(null);

//   const handleMouseEnter = (index) => {
//     setHovered(index);
//   };

//   const handleMouseLeave = () => {
//     setHovered(null);
//   };


//   return (
//     <div
//       id="portfolio"
//       style={{
//         minHeight: "130vh",
//         maxWidth: "1000px",
//         margin: "0 auto",
//         padding: "16px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "flex-start",
//       }}
//     >
//       <Grid container spacing={4} direction={"column"} justifyContent="center">
//         <Grid item>
//           <Typography variant="h3">Portfolio:</Typography>
//           <Typography gutterBottom variant="body1">
//             Check out some of my work.
//           </Typography>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           rowSpacing={5}
//           columnSpacing={4}
//         >
//           {projects.map((project, index) => (
//             <Grid item key={project.name} >
//               <Card
//                 sx={{
//                   width: 300,
//                   height: 300,
//                   backgroundColor: "rgba(0,0,0,0.2)",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   width="300"
//                   borderRadius="16"
//                   overflow="hidden"
//                   image={project.image}
//                   alt={project.name}
//                   sx={{
//                     transition: "transform 0.3s",
//                     transform: `scale(${hovered === index ? 1.1 : 1})`,
//                   }}
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={handleMouseLeave}
//                 />

//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {project.name}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <IconButton
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <VisibilityIcon />
//                     <Typography variant="body2">Demo</Typography>
//                   </IconButton>

//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Portfolio;

const Portfolio = () => {
  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div id="portfolio" style={{
      minHeight: "100vh", padding: "50px"
    }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>Portfolio</Typography>
          <Typography variant="body1" align="center" gutterBottom>Check out some of my work.</Typography>
        </Grid>
        <Grid item container spacing={4} justifyContent="center" width='80%'>
          {projects.map((project, index) => (
            <Grid item key={project.name} xs={12} sm={6} md={4}>
              <Card
                sx={{ backgroundColor: "#ffffff", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.name}
                  sx={{ transition: "transform 0.3s", transform: `scale(${hovered === index ? 1.05 : 1})` }}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>{project.name}</Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>{project.description}</Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "center" }}>
                  <IconButton href={project.link} target="_blank" rel="noopener noreferrer">
                    <VisibilityIcon />
                    <Typography variant="body2">Demo</Typography>
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
