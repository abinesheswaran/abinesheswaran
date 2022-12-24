import { Grid, Typography } from "@mui/material";
import { FC } from "react";
interface Props {
  experience: {
    companyName: string;
    startDate: string;
    logo: string;
    endDate: string;
    location: string;
    role: string;
  };
}

const ExperienceCard: FC<Props> = ({ experience }) => {
  return (
    <Grid
      container
      item
      flexDirection="column"
      sx={{
        bgcolor: "#44A5FED9",
        mb: 10,
        color: "#fff",
        p: 2,
        borderRadius: "4px",
        width: "fit-content",
      }}
    >
      <Grid item>
        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
          {experience.role}
        </Typography>
      </Grid>
      <Grid
        container
        item
        flexDirection={"row"}
        flexWrap={"nowrap"}
        alignItems={"center"}
        spacing={1}
        sx={{ width: "fit-content" }}
      >
        <Grid item>
          <img
            src={experience.logo}
            alt={experience.companyName}
            loading="lazy"
            style={{ width: "6rem" }}
          />
        </Grid>
        <Grid container item flexDirection={"column"}>
          <Grid item>
            <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
              {experience.companyName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
              {experience.startDate} - {experience.endDate}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          {experience.location}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ExperienceCard;
