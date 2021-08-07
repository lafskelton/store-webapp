import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Slide,
  Typography,
  Fade,
  useMediaQuery,
  Divider,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  headerText: {
    color: "#ffffff",
    // fontFamily: '"Raleway"',
    fontSize: 18,
    "@media (min-width:800px)": {
      fontSize: 320,
    },
    "@media (max-width:800px)": {
      fontSize: 255,
    },
    "@media (max-width:700px)": {
      fontSize: 222,
    },
    "@media (max-width:600px)": {
      fontSize: 200,
    },
    "@media (max-width:500px)": {
      fontSize: 133,
    },
    "@media (max-width:325px)": {
      fontSize: 99,
    },
  },
  headerSubtext: {
    color: "#ffffff",
    // fontFamily: '"Raleway"',
  },
  button: {
    "@media (min-width:800px)": {
      fontSize: 24,
    },
    "@media (max-width:800px)": {
      fontSize: 24,
    },
    "@media (max-width:700px)": {
      fontSize: 24,
    },
    "@media (max-width:600px)": {
      fontSize: 22,
    },
    "@media (max-width:500px)": {
      fontSize: 16,
    },
    "@media (max-width:325px)": {
      fontSize: 11,
    },
  },
});

export interface LogoProps {
  slideIn: boolean;
  changeView: Function;
}

export default function Logo({ slideIn, changeView }: LogoProps) {
  const classes = useStyles();

  const isDesktop = useMediaQuery("(min-aspect-ratio: 6/5)");

  return (
    <Box
      display="flex"
      m={1}
      // border={1}
      flexDirection="column"
      // overflow="hidden"
      justifyContent="center"
      maxWidth={666}
      width="98%"
      height="100%"
    >
      <Box
        display="flex"
        m={1}
        flexDirection={isDesktop ? "row" : "column"}
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
      >
        <Slide
          in={slideIn}
          timeout={{ enter: 888, appear: 888, exit: 333 }}
          direction="right"
        >
          <Typography
            variant="h1"
            align="center"
            className={classes.headerText}
          >
            theoretic
          </Typography>
        </Slide>
      </Box>
      <br />
      {/* Info Action Area */}
      <Slide
        in={slideIn}
        direction="up"
        timeout={{ appear: 1000, enter: 1000, exit: 333 }}
      >
        <Box
          display="flex"
          m={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Fade in={slideIn} timeout={{ enter: 3333, appear: 3333, exit: 333 }}>
            <Divider style={{ color: "#ffffff", width: "66%" }} />
          </Fade> */}
          <Box
            display="flex"
            m={1}
            color="#ffffff"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <Fade
              in={slideIn}
              timeout={{ enter: 2222, appear: 2222, exit: 333 }}
            >
              <Button
                size={isDesktop ? "large" : "small"}
                onClick={() => {
                  changeView("about");
                }}
              >
                <Typography
                  variant="subtitle1"
                  noWrap
                  className={classes.button}
                >
                  about us
                </Typography>
              </Button>
            </Fade>

            <Fade
              in={slideIn}
              timeout={{ enter: 3333, appear: 3333, exit: 333 }}
            >
              <Typography variant="subtitle1" className={classes.button}>
                |
              </Typography>
            </Fade>
            <Fade
              in={slideIn}
              timeout={{ enter: 2222, appear: 2222, exit: 333 }}
            >
              <Button size="small">
                <Typography variant="subtitle1" className={classes.button}>
                  careers
                </Typography>
              </Button>
            </Fade>

            <Fade
              in={slideIn}
              timeout={{ enter: 3333, appear: 3333, exit: 333 }}
            >
              <Typography variant="subtitle1" className={classes.button}>
                |
              </Typography>
            </Fade>
            <Fade
              in={slideIn}
              timeout={{ enter: 2222, appear: 2222, exit: 333 }}
            >
              <Button size="small">
                <Typography variant="subtitle1" className={classes.button}>
                  policies
                </Typography>
              </Button>
            </Fade>
          </Box>
        </Box>
      </Slide>
      {/* <Slide
        in={slideIn}
        direction="up"
        timeout={{ appear: 1000, enter: 1000, exit: 333 }}
      >
        <Box
          height="10%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          m={1}
        >
          <Box display="flex" m={1}>
            <Fade in={slideIn} timeout={2500}>
              <Button
                variant="text"
                size={isDesktop ? "large" : "small"}
                onClick={() => {
                  changeView("about");
                }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  style={{
                    // fontSize: 22,
                    color: "#ffffff",
                  }}
                >
                  about us
                </Typography>
              </Button>
            </Fade>
          </Box>

          <Box display="flex" m={1}>
            <Fade in={slideIn} timeout={3333}>
              <Button size="large" onClick={() => {}}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{
                    color: "#ffffff",
                  }}
                >
                  checkout
                </Typography>
              </Button>
            </Fade>
          </Box>
        </Box>
      </Slide> */}
    </Box>
  );
}
