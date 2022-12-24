import { Grid, Typography } from "@mui/material";
import ProjectCard from "../../components/project-card";
import { PROJECTS_LIST } from "../../constants";

const Projects = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={3}
      sx={{ height: "100vh" }}
      id={"projects"}
    >
      <Grid item>
        <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
          PROJECTS
        </Typography>
      </Grid>
      <Grid item container spacing={3} sx={{ m: 3 }}>
        {PROJECTS_LIST.map((project, key) => (
          <ProjectCard project={project} key={key} />
        ))}
      </Grid>
    </Grid>
  );
};
export default Projects;
