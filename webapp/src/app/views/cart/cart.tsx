import { useState } from "react";
import { Box } from "@material-ui/core";
import { useEffect } from "react";
import MyCart from "./mycart";
import Checkout from "./checkout";
import { ItemData, ShoppingCartItem } from "../../myTypes";

interface HomeProps {
  show: boolean;
  exiting: boolean;
  shoppingCart: ShoppingCartItem[];
  removeItemFromCart: Function;
}

export default function Home({
  show,
  exiting,
  shoppingCart,
  removeItemFromCart,
}: HomeProps) {
  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<"cart" | "checkout">("cart");

  useEffect(() => {
    setSlideIn(show);
  }, [show]);
  useEffect(() => {
    setSlideIn(!exiting);
  }, [exiting]);

  const changeView = (v: "cart" | "checkout") => {
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
      <div style={{ display: currentView === "cart" ? "contents" : "none" }}>
        <MyCart
          shoppingCart={shoppingCart}
          removeItemFromCart={removeItemFromCart}
          slideIn={slideIn}
          changeView={changeView}
        />
      </div>
      <div
        style={{ display: currentView === "checkout" ? "contents" : "none" }}
      >
        <Checkout slideIn={slideIn} changeView={changeView} />
      </div>
    </Box>
  );
}
