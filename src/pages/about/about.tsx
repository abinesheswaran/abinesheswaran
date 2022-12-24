import { Button, Grid, Typography } from "@mui/material";
import PageWrapper from "../../components/page-wrapper";
import { ReactComponent as AboutSvg } from "../../svg/about-me.svg";

const About = () => {
  return (
    <PageWrapper
      svg={<AboutSvg />}
      svgRight={true}
      contentStyles={{ alignItems: "start", justifyContent: "start" }}
      pageId={"about"}
    >
      <>
        <Grid item>
          <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
            LET’S INTRODUCE ABOUT MYSELF
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: "15px", color: "#777777" }}>
            "Hi, I am Abinesh Eswaran. I am from Tamil Nadu. I completed my
            Bachelor of Engineering degree (Computer Science) in 2020 from Psna
            Cet. My interests are in front-end engineering, and I love to create
            beautiful and performant products with delightful user experiences.
            I have been working with Kudelski Security for almost one year. I
            have learned the ins and outs of UI engineering in my journey.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            href={
              "https://docs.google.com/document/d/e/2PACX-1vRpL5b9nAt0nMyuCfzSYHc4R1QSwUffJZrZJD7wtyq7eBUSwlEJ5KdrhL40oR_9Ew/pub"
            }
            target={"_blank"}
          >
            Get CV
          </Button>
        </Grid>
      </>
    </PageWrapper>
  );
};

export default About;
