import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Slide,
  Typography,
  Fade,
  useMediaQuery,
  Button,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
  headerText: {
    color: "#ffffff",
    // fontFamily: '"Raleway"',
    fontSize: 18,
    "@media (min-width:800px)": {
      fontSize: 222,
    },
    "@media (max-width:800px)": {
      fontSize: 222,
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

export interface AboutUsProps {
  slideIn: boolean;
  changeView: Function;
}

export default function AboutUs({ slideIn, changeView }: AboutUsProps) {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        className={classes.headerText}
        style={{}}
      >
        <Box
          display="flex"
          flexDirection={
            useMediaQuery("(min-aspect-ratio: 6/5)") ? "row" : "column"
          }
          justifyContent="center"
        >
          <Slide
            in={slideIn}
            timeout={{ enter: 888, appear: 888, exit: 333 }}
            direction="right"
          >
            <Box m={1}>About Us</Box>
          </Slide>
        </Box>
      </Typography>
      {/* </Box> */}
      {useMediaQuery("(min-aspect-ratio: 6/5)") ? (
        <></>
      ) : (
        <>
          <br />
          <br />
          <br />
        </>
      )}
      {/* {useMediaQuery("(min-aspect-ratio: 6/5)") ? <></> : <br />} */}
      <Fade in={slideIn} timeout={{ enter: 888, appear: 888, exit: 333 }}>
        <Typography
          variant="h4"
          className={classes.headerSubtext}
          align="center"
          style={{
            fontSize: useMediaQuery("(min-aspect-ratio: 6/5)") ? 18 : 16,
            margin: 10,
            maxWidth: 444,
          }}
        >
          {/* Powered by autismo! */}i like trains.i like trains.i like trains.i
          like trains.i like trains.i like trains.i like trains.i like trains.i
          like trains.i like trains.i like trains.i like trains.i like trains.i
          like trains.i like trains.i like trains.i like trains.i like trains.i
          like trains.i like trains.i like trains.i like trains.i like trains.i
          like trains.i like trains.i like trains.
        </Typography>
      </Fade>
      <br />

      {useMediaQuery("(min-aspect-ratio: 6/5)") ? (
        <></>
      ) : (
        <>
          <br />
        </>
      )}

      {/* Info Action Area */}

      <Box
        display="flex"
        m={1}
        // border={1}
        // width="50%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Fade in={slideIn} timeout={{ enter: 1888, appear: 1888, exit: 333 }}>
          <Divider style={{ color: "#ffffff", width: "100%" }} />
        </Fade>
        <Fade in={slideIn} timeout={{ enter: 1111, appear: 1111, exit: 333 }}>
          <Button
            // variant="outlined"
            size="small"
            onClick={() => {
              changeView("logo");
            }}
          >
            <Typography
              variant="subtitle1"
              className={classes.button}
              style={{
                fontSize: useMediaQuery("(min-aspect-ratio: 6/5)") ? 18 : 11,
              }}
            >
              back to home
            </Typography>
          </Button>
        </Fade>
        <Fade in={slideIn} timeout={{ enter: 1888, appear: 1888, exit: 333 }}>
          <Divider style={{ color: "#ffffff", width: "100%" }} />
        </Fade>
      </Box>
    </>
  );
}
