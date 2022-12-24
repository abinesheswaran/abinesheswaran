import { Grid, Typography } from "@mui/material";
import PageWrapper from "../../components/page-wrapper";
import { CONTACT_DETAILS } from "../../constants";
import { ReactComponent as ContactMeSvg } from "../../svg/contact-me.svg";

const Contacts = () => {
  return (
    <PageWrapper title={"CONTACTS"} svg={<ContactMeSvg />} pageId={"contact"}>
      <>
        {CONTACT_DETAILS.map((el, key) => (
          <Grid key={key} container item spacing={3}>
            <Grid item sx={{ mt: 1, color: "#666666" }}>
              {el.icon}
            </Grid>
            <Grid item>
              <Grid container item flexDirection={"column"}>
                <Grid item>
                  <Typography sx={{ fontSize: "24px" }}>{el.title}</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: "16px", color: "#2F2E41" }}>
                    {el.subTitle}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </>
    </PageWrapper>
  );
};
export default Contacts;
