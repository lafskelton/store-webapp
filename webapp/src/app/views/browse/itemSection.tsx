import { Typography, Box, Fade } from "@material-ui/core";
import { ItemData, ShoppingCartItem, SideDrawerState } from "../../myTypes";
import { makeStyles } from "@material-ui/core";
import { createRipple } from "./lib/ripple";
import { useMediaQuery } from "@material-ui/core";
import { useEffect, useState } from "react";

import { ShoppingCartRounded } from "@material-ui/icons";

const useStyles = makeStyles({
  tile: {
    maxWidth: "98%",
    width: "98%",
    borderRadius: 6,
    // height: "95%",
    overflow: "hidden",
    position: "relative",
    // zIndex: 1060,
  },
  tileBar: {
    // zIndex: 1090,
    position: "relative",
    // bottom: 2,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 100%)",
    // zIndex: 1065,
  },
});

//Full width, double hieght tile
export interface SectionTitleRowProps {
  title: string;
}
export const SectionTitleRow = ({ title }: SectionTitleRowProps) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent={"space-around"}>
      <Typography
        variant="h1"
        style={{ color: "#ffffff", fontSize: 110, margin: 10 }}
        align="center"
      >
        {title}
      </Typography>
    </Box>
  );
};
//Full width, double hieght tile
export interface FullSectionRowProps {
  rowId: number;
  sectionId: number;
  itemData: ItemData;
  children?: JSX.Element;
  openSideDrawer: Function;
  animationDelay: number;
}
export const FullSectionRow = ({
  itemData,
  animationDelay,
  rowId,
  sectionId,
  openSideDrawer,
}: FullSectionRowProps) => {
  const classes = useStyles();
  const click = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    //Create inital side view state
    let sideViewObj: SideDrawerState = {
      itemData: itemData,
    };
    //Send to reducer
    openSideDrawer(sideViewObj);
    //Ripple animation
    createRipple(event);
  };

  const [inCart, setinCart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let cartJSON = window.sessionStorage.getItem("shoppingCart");
      if (cartJSON) {
        let cart: ShoppingCartItem[] = JSON.parse(cartJSON);
        if (cart.length > 0) {
          setinCart(
            cart.find((cartItem) => cartItem.item.id === itemData.id) !==
              undefined
              ? true
              : false
          );
        } else {
          setinCart(false);
        }
      }
    }, 222);
    return () => clearInterval(interval);
  }, []);

  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 1111);
  // }, []);

  return (
    <Box display="flex" flexDirection="row" justifyContent={"space-around"}>
      <Fade in={true}>
        <Box
          className={classes.tile}
          // border={2}
          boxShadow={5}
          height={useMediaQuery("(min-width:600px)") ? 400 : 275}
          width="100%"
          m={0.5}
          onClick={(e) => click(e)}
          overflow="hidden"
          // border={1}
        >
          <Fade
            in={inCart}
            timeout={{ appear: 444, enter: 444, exit: 333 }}
            unmountOnExit
            mountOnEnter
          >
            <Box
              // visibility={inCart ? "visible" : "hidden"}
              position="absolute"
              display="flex"
              width="100%"
              height="100%"
              borderRadius={6}
              // border={1}
              style={{
                backdropFilter: "blur(6px)",
                background: "rgba(0,0,0, 0.2)",
              }}
            >
              <Box m={1}>
                <ShoppingCartRounded
                  style={{ fontSize: 55, color: "#ffffff" }}
                />
              </Box>
            </Box>
          </Fade>

          <Box display="flex" height={"80%"}>
            <img
              src={itemData.tileImg}
              alt={""}
              style={{ width: "100%", height: "125%" }}
            />
          </Box>

          <Box
            display="flex"
            height={"20%"}
            borderRadius={0}
            className={classes.tileBar}
          >
            <Typography variant={"h3"} style={{ color: "#ffffff" }}>
              &nbsp;&nbsp;${itemData.price}
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

//Double tile row
export interface DoubleSectionRowProps {
  animationDelay: number;
  rowId: number;
  sectionId: number;
  rightItemData: ItemData;
  leftItemData: ItemData;
  children?: JSX.Element;
  openSideDrawer: Function;
}
export const DoubleSectionRow = ({
  rightItemData,
  leftItemData,
  rowId,
  sectionId,

  animationDelay,
  openSideDrawer,
}: DoubleSectionRowProps) => {
  const classes = useStyles();

  const click = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    leftItem: boolean
  ) => {
    //Create inital side view state
    let sideViewObj: SideDrawerState = {
      itemData: leftItem ? leftItemData : rightItemData,
    };
    //Send to reducer
    openSideDrawer(sideViewObj);
    //Ripple animation
    createRipple(event);
  };

  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 555);
  // }, []);

  const [leftInCart, setLeftInCart] = useState(false);
  const [rightInCart, setRightInCart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let cartJSON = window.sessionStorage.getItem("shoppingCart");
      if (cartJSON) {
        let cart: ShoppingCartItem[] = JSON.parse(cartJSON);
        setLeftInCart(
          cart.find((cartItem) => cartItem.item.id === leftItemData.id)
            ? true
            : false
        );

        setRightInCart(
          cart.find((cartItem) => cartItem.item.id === rightItemData.id)
            ? true
            : false
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box display="flex" flexDirection="row" justifyContent={"space-around"}>
      <Fade in={true}>
        <Box
          className={classes.tile}
          // border={2}
          boxShadow={5}
          width="100%"
          height={useMediaQuery("(min-width:600px)") ? 200 : 130}
          m={0.5}
          onClick={(e) => click(e, true)}
        >
          <Fade
            in={leftInCart}
            timeout={{ appear: 444, enter: 444, exit: 333 }}
          >
            <Box
              // visibility={inCart ? "visible" : "hidden"}
              position="absolute"
              display="flex"
              width="100%"
              height="100%"
              borderRadius={6}
              // border={1}
              style={{
                backdropFilter: "blur(6px)",
                background: "rgba(0,0,0, 0.2)",
              }}
            >
              <Box m={1}>
                <ShoppingCartRounded
                  style={{ fontSize: 55, color: "#ffffff" }}
                />
              </Box>
            </Box>
          </Fade>

          <Box display="flex" height={"77%"}>
            <img
              src={leftItemData.tileImg}
              alt={""}
              style={{ width: "100%", height: "130%" }}
            />
          </Box>

          <Box
            display="flex"
            height={"24%"}
            // border={2}
            borderRadius={0}
            className={classes.tileBar}
          >
            <Typography variant={"h5"} style={{ color: "#ffffff" }}>
              &nbsp;&nbsp;${rightItemData.price}
            </Typography>
          </Box>
        </Box>
      </Fade>
      <Fade in={true} timeout={500}>
        <Box
          className={classes.tile}
          // border={2}
          boxShadow={10}
          width="100%"
          // maxWidth="%50"
          height={useMediaQuery("(min-width:600px)") ? 200 : 130}
          m={0.5}
          onClick={(e) => click(e, false)}
          key={`${sectionId}_${rowId}_rightTile`}
        >
          <Fade
            in={rightInCart}
            timeout={{ appear: 444, enter: 444, exit: 333 }}
          >
            <Box
              // visibility={inCart ? "visible" : "hidden"}
              position="absolute"
              display="flex"
              width="100%"
              height="100%"
              borderRadius={6}
              // border={3}
              style={{
                backdropFilter: "blur(6px)",
                background: "rgba(0,0,0, 0.2)",
              }}
            >
              <Box m={1}>
                <ShoppingCartRounded
                  style={{ fontSize: 55, color: "#ffffff" }}
                />
              </Box>
            </Box>
          </Fade>
          <Box display="flex" height={"77%"}>
            <img
              src={rightItemData.tileImg}
              alt={""}
              style={{ width: "100%", height: "130%" }}
            />
          </Box>

          <Box
            display="flex"
            height={"24%"}
            // border={2}
            borderRadius={0}
            className={classes.tileBar}
          >
            <Typography variant={"h5"} style={{ color: "#ffffff" }}>
              &nbsp;&nbsp;${rightItemData.price}
            </Typography>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

//Single right aligned tile
export interface SingleSectionRowProps {
  rowId: number;

  itemData: ItemData;
  children?: JSX.Element;
  openSideDrawer: Function;
  sectionId: number;
}
export const SingleSectionRow = ({
  itemData,
  rowId,
  openSideDrawer,
  sectionId,
}: SingleSectionRowProps) => {
  const classes = useStyles();

  return <Box></Box>;
};
