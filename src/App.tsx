import { Box, Toolbar } from "@mui/material";
import ResponsiveAppBar from "./components/app-bar";
import About from "./pages/about";
import Awards from "./pages/awards";
import Contacts from "./pages/contacts";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box component="main">
        <Toolbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contacts />
      </Box>
    </>
  );
};

export default App;
