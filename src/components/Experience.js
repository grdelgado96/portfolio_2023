import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import HTMLLogo from "../assets/Logos/HTML.png";
import CSSLogo from "../assets/Logos/CSS.png";
import JavaScriptLogo from "../assets/Logos/JavaScript.png";
import TypeScriptLogo from "../assets/Logos/TypeScript.png";
import ReactLogo from "../assets/Logos/React.png";
import NextLogo from "../assets/Logos/Next.png";
import NodeLogo from "../assets/Logos/Node.png";
import MaterialLogo from "../assets/Logos/MaterialUI.png";
import GitLogo from "../assets/Logos/Git.png";
import ServerlessLogo from "../assets/Logos/Serverless.png";
import S3Logo from "../assets/Logos/S3.png";

const techs = [
  { name: "HTML", image: HTMLLogo , color:'rgba(228,77,38,255)'},
  { name: "CSS", image: CSSLogo, color:'rgba(31,98,174,255)' },
  { name: "JavaScript", image: JavaScriptLogo, color: 'rgba(240,219,79,255)'},
  { name: "TypeScript", image: TypeScriptLogo, color:'rgba(0,0,0,255)' },
  { name: "React", image: ReactLogo, color:'rgba(97,218,251,255)' },
  { name: "Next", image: NextLogo, color:'rgba(0,0,0,255)' },
  { name: "Node.js", image: NodeLogo, color:'rgba(93,172,70,255)' },
  { name: "Material UI", image: MaterialLogo, color:'rgba(0,127,255,255)' },
  { name: "Git", image: GitLogo, color:'rgba(241,98,88,255)' },
  { name: "Serverless Framework", image: ServerlessLogo, color:'rgba(242,109,97,255)' },
  { name: "AWS S3", image: S3Logo, color:'rgba(225,83,67,255)' },
];

const Experience = () => {
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

  return (
    <div
      id="experience"
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
      <Grid
        container
        spacing={2}
        direction={"column"}
        justifyContent="center"
        //alignItems={"center"}
      >
        <Grid item>
          <Typography variant="h2" style={textStyle}>
            Experience:
          </Typography>
          <Typography gutterBottom variant="body1" style={textStyle}>
            These are some technologies I've worked with.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
          columnSpacing={4}
        >
          {techs.map((tech, index) => (
            <Grid item key={tech.name}>
              <Card
                sx={{
                  width: 200,
                  height: 150,
                  backgroundColor: "transparent",
                  borderRadius: 5,
                  transition: "transform 0.3s",
                  transform: `scale(${hovered === index ? 1.1 : 1})`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: `2px 2px 8px ${tech.color}`,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Avatar
                  alt={tech.name}
                  src={tech.image}
                  sx={{ width: 80, height: 80, marginTop:'4px' }}
                  variant="square"
                />
                <CardContent>
                  <Typography
                    style={textStyle}
                    gutterBottom
                    variant="body1"
                    component="div"
                  >
                    {tech.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
