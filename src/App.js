import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.css';
import SocialMedia from "./components/SocialMedia";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 1)",
    },
    secondary: {
      main: "rgba(0, 0, 0, 0.47)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Footer/>
      <SocialMedia/>
    </ThemeProvider>
  );
}

export default App;
