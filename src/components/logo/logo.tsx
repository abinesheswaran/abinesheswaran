import { Box, Grid, Typography } from "@mui/material";
import { ReactComponent as LogoSvg } from "../../svg/logo-circle.svg";

const Logo = () => {
  const style = {
    logoColor: {
      background:
        "linear-gradient(97.95deg, #44A5FE 15.69%, rgba(111, 5, 160, 0.88) 91.08%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };
  return (
    <Box sx={{ display: "block", flexGrow: 1 }} component="div">
      <Grid container spacing={1} height="3rem" alignItems="end">
        <Grid item>
          <Typography variant="h6" sx={{ ...style.logoColor }}>
            Abinesh
          </Typography>
        </Grid>
        <Grid item alignSelf="start">
          <LogoSvg />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Logo;
