import React from "react";
import { Grid, Typography, ListItem, List } from "@mui/material";

const About = () => {
 

  const aboutText =
    "A goal-oriented developer with knowledge of Frontend technology seeking to use technical proficiency and creativity to develop modern web applications, engage user experiences and advance professionally. Practical experience with React.js, Next.js, Git, GitHub, GitHub Actions, and basic knowledge of Serverless Framework and AWS S3 Bucket. Looking to leverage project collaboration capabilities to produce applications that exceed user expectations.";

  const softSkills = [
    "• Analitical and Logical Thinking",
    "• Continuous Learning and Improvement",
    "• Adaptability and Flexibility",
  ];
  const contacts = [
    "• USA, Bradenton, FL",
    "• +1 941 592 6528",
    "• rodriguezdelgadogiselle@gmail.com",
  ];

  return (
    <div style={{
      minHeight: "50vh",
      maxWidth: "1000px",
      margin: "0 auto", 
      padding: "16px",
      display: "flex", 
      justifyContent: "center",
      alignItems: "flex-start", 
    }} id="about" >
      <Grid
        container
        spacing={2}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={10} container direction={"column"} wrap="nowrap" >
          <Typography variant="h2" style={{color:'white'}}>
            About:
          </Typography>
          <Typography
            variant="body1"
            style={{ color:'white', marginBottom: "16px" }}
          >
            {aboutText}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6} container direction={'column'}>
            <Typography variant="h4" style={{color:'white'}}>
              Competencies:
            </Typography>
            <List>
              {softSkills.map((skill) => (
                <ListItem key={skill} style={{ display: "flex" }}>
                  <Typography variant="body1" style={{color:'white'}}>
                    {skill}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} container direction={'column'}>
            <Typography variant="h4" style={{color:'white'}}>
              Contact Details:
            </Typography>
            <List>
              {contacts.map((contact) => (
                <ListItem key={contact} style={{ display: "flex" }}>
                  <Typography variant="body1" style={{color:'white'}}>
                    {contact}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
