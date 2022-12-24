import { Grid, SxProps, Typography } from "@mui/material";
import { FC, ReactElement } from "react";

interface Props {
  title?: string;
  children: ReactElement;
  svg: ReactElement;
  svgRight?: boolean;
  contentStyles?: SxProps;
  pageId: string;
}

const PageWrapper: FC<Props> = ({
  title,
  children,
  svg,
  svgRight,
  contentStyles,
  pageId,
}) => (
  <Grid
    container
    justifyContent="center"
    alignContent={"space-evenly"}
    id={pageId}
  >
    {title && (
      <Grid item>
        <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
          {title}
        </Typography>
      </Grid>
    )}
    <Grid
      item
      container
      sx={{ p: 10, flexDirection: svgRight ? "row-reverse" : "" }}
      spacing={10}
    >
      <Grid
        container
        item
        xs={6}
        flexDirection="column"
        spacing={2}
        justifyContent="center"
        alignItems={"center"}
        sx={{
          ...contentStyles,
        }}
      >
        {children}
      </Grid>
      <Grid item xs={6}>
        {svg}
      </Grid>
    </Grid>
  </Grid>
);
export default PageWrapper;
