import { Grid } from "@mui/material";
import PageWrapper from "../../components/page-wrapper";
import { AWARD_IMAGES } from "../../constants";
import { ReactComponent as AwardsSvg } from "../../svg/awards.svg";

const Awards = () => {
  return (
    <PageWrapper
      title={"Awards"}
      svg={<AwardsSvg />}
      svgRight={true}
      contentStyles={{ flexDirection: "row" }}
      pageId={"awards"}
    >
      <>
        {AWARD_IMAGES.map((img, key) => (
          <Grid item key={key}>
            <img
              src={img}
              alt={"award"}
              loading="lazy"
              style={{
                width: "15rem",
                height: "20rem",
                border: "10px solid #5b5b5b",
              }}
            />
          </Grid>
        ))}
      </>
    </PageWrapper>
  );
};
export default Awards;
