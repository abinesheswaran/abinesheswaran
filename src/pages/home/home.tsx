import { Button, Grid, Typography } from "@mui/material";
import { ReactComponent as SayHello } from "../../svg/say-hello.svg";

const Home = () => {
  return (
    <Grid
      container
      sx={{ p: 10, pt: 20, height: "100vh", alignItems: "center" }}
      id={"home"}
    >
      <Grid item xs={6}>
        <Grid container flexDirection="column" alignItems="start" spacing={1}>
          <Grid item>
            <Typography sx={{ fontWeight: 500, fontSize: "40px" }}>
              HELLO
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: 500, fontSize: "70px" }}>
              I AM ABINESH
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontWeight: 500, fontSize: "24px" }}>
              UI ENGINEER
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                color: "#000",
              }}
              href={
                "https://docs.google.com/document/d/e/2PACX-1vRpL5b9nAt0nMyuCfzSYHc4R1QSwUffJZrZJD7wtyq7eBUSwlEJ5KdrhL40oR_9Ew/pub"
              }
              target={"_blank"}
            >
              Get CV
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <SayHello />
      </Grid>
    </Grid>
  );
};
export default Home;
