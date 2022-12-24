import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  project: {
    projectName: string;
    startDate: string;
    endDate: string;
    company: string;
    describtion: string;
    techStack: string;
    logo: string;
  };
}
const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <Grid
      container
      item
      flexDirection={"column"}
      sx={{ bgcolor: "#E4E4E445", mb: 3, p: 3, borderRadius: "4px" }}
    >
      <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
        {project.projectName}
      </Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: 300, color: "#777777" }}>
        {project.startDate}-{project.endDate}
      </Typography>
      <Grid container item sx={{ width: "fit-content" }}>
        <Grid item>
          <img
            src={project.logo}
            alt={project.company}
            loading="lazy"
            style={{ width: "6rem" }}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 300 }}
          >
            Associated with {project.company}
          </Typography>
        </Grid>
      </Grid>
      <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#777777" }}>{project.describtion}</Typography>
      <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#777777" }}>{project.techStack}</Typography>
    </Grid>
  );
};
export default ProjectCard;
