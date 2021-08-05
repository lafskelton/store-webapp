import { useState } from "react";
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
  },
  headerSubtext: {
    color: "#ffffff",
    // fontFamily: '"Raleway"',
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
        style={{
          fontSize: useMediaQuery("(min-aspect-ratio: 6/5)") ? 111 : 111,
        }}
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
