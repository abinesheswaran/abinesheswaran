import {
  useScrollTrigger,
  Slide,
  AppBar,
  Toolbar,
  Box,
  Button,
  Grid,
} from "@mui/material";
import { Menu_Items } from "../../constants";
import Logo from "../logo";
import { Link } from "react-scroll";

interface Props {
  children: React.ReactElement;
}

const ResponsiveAppBar = () => {
  const HideOnScroll = (props: Props) => {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <HideOnScroll>
      <AppBar component="nav" sx={{ bgcolor: "#fff", px: 10 }}>
        <Toolbar>
          <Logo />
          <Box>
            <Grid container spacing={3}>
              {Menu_Items.map((item, key) => (
                <Grid item key={key}>
                  <Button sx={{ color: "#000" }}>
                    <Link
                      to={item.pageId}
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={500}
                      style={{ color: "inherit" }}
                    >
                      {item.menuName}
                    </Link>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default ResponsiveAppBar;
