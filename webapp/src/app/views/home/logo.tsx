import React, { useState } from "react";
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
import AllInclusiveTwoToneIcon from "@material-ui/icons/AllInclusiveTwoTone";
import { useEffect } from "react";

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

export interface LogoProps {
  slideIn: boolean;
  changeView: Function;
}

export default function Logo({ slideIn, changeView }: LogoProps) {
  const classes = useStyles();

  const isDesktop = useMediaQuery("(min-aspect-ratio: 6/5)");

  return (
    <>
      <Box
        display="flex"
        flexDirection={isDesktop ? "row" : "column"}
        justifyContent="center"
        alignItems="center"
      >
        <Slide
          in={slideIn}
          timeout={{ enter: 888, appear: 888, exit: 333 }}
          direction="right"
        >
          <Typography
            variant="h3"
            align="center"
            className={classes.headerText}
          >
            theoretic
          </Typography>
        </Slide>
      </Box>
      <br />
      {/* Info Action Area */}
      <Box
        display="flex"
        m={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Fade in={slideIn} timeout={{ enter: 3333, appear: 3333, exit: 333 }}>
          <Divider style={{ color: "#ffffff", width: "66%" }} />
        </Fade>
        <Box
          display="flex"
          m={1}
          color="#ffffff"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Fade in={slideIn} timeout={{ enter: 2222, appear: 2222, exit: 333 }}>
            <Button
              size={isDesktop ? "large" : "small"}
              onClick={() => {
                changeView("about");
              }}
            >
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: isDesktop ? 16 : 11,
                }}
              >
                about us
              </Typography>
            </Button>
          </Fade>

          <Fade in={slideIn} timeout={{ enter: 3333, appear: 3333, exit: 333 }}>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: isDesktop ? 16 : 11,
              }}
            >
              |
            </Typography>
          </Fade>
          <Fade in={slideIn} timeout={{ enter: 2222, appear: 2222, exit: 333 }}>
            <Button size="small">
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: isDesktop ? 16 : 11,
                }}
              >
                careers
              </Typography>
            </Button>
          </Fade>

          <Fade in={slideIn} timeout={{ enter: 3333, appear: 3333, exit: 333 }}>
            <Typography
              variant="subtitle1"
              style={{
                fontSize: isDesktop ? 16 : 11,
              }}
            >
              |
            </Typography>
          </Fade>
          <Fade in={slideIn} timeout={{ enter: 2222, appear: 2222, exit: 333 }}>
            <Button size="small">
              <Typography
                variant="subtitle1"
                style={{
                  fontSize: isDesktop ? 16 : 11,
                }}
              >
                policies
              </Typography>
            </Button>
          </Fade>
        </Box>
        <Fade in={slideIn} timeout={{ enter: 3333, appear: 3333, exit: 333 }}>
          <Divider style={{ color: "#ffffff", width: "66%" }} />
        </Fade>
      </Box>
      <br /> <br />
      <Fade in={slideIn} timeout={{ enter: 1333, appear: 1333, exit: 333 }}>
        <Typography
          variant="h4"
          className={classes.headerSubtext}
          style={{
            fontSize: isDesktop ? 38 : 22,
          }}
        >
          {/* welcome to hell. */}
        </Typography>
      </Fade>
    </>
  );
}
