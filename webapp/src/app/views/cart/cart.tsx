import { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { useEffect } from "react";
import MyCart from "./mycart";
import Checkout from "./checkout";
import { ItemData } from "../../myTypes";

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

interface HomeProps {
  show: boolean;
  exiting: boolean;
  shoppingCart: ItemData[];
  removeItemFromCart: Function;
}

export default function Home({
  show,
  exiting,
  shoppingCart,
  removeItemFromCart,
}: HomeProps) {
  const classes = useStyles();

  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<"logo" | "about">("logo");

  useEffect(() => {
    setSlideIn(show);
  }, [show]);
  useEffect(() => {
    setSlideIn(!exiting);
  }, [exiting]);

  const changeView = (v: "logo" | "about") => {
    //Slide out animation
    setSlideIn(false);
    //Change after out
    setTimeout(() => {
      setCurrentView(v);
      //Slide Back in
      setTimeout(() => {
        setSlideIn(true);
      }, 100);
    }, 888);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      overflow="hidden"
    >
      <div style={{ display: currentView === "logo" ? "contents" : "none" }}>
        <MyCart
          shoppingCart={shoppingCart}
          removeItemFromCart={removeItemFromCart}
          slideIn={slideIn}
          changeView={changeView}
        />
      </div>
      <div style={{ display: currentView === "about" ? "contents" : "none" }}>
        <Checkout slideIn={slideIn} changeView={changeView} />
      </div>
    </Box>
  );
}
