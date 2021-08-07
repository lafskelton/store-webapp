import { makeStyles } from "@material-ui/core/styles";
import { Box, Slide, Typography, useMediaQuery } from "@material-ui/core";

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

export interface CheckoutProps {
  slideIn: boolean;
  changeView: Function;
}

export default function Checkout({ slideIn, changeView }: CheckoutProps) {
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
          direction="left"
        >
          <Typography
            variant="h3"
            align="center"
            className={classes.headerText}
          >
            checkout
          </Typography>
        </Slide>
      </Box>
    </>
  );
}
