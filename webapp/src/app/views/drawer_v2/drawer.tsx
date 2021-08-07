import { Box, Fade, useMediaQuery } from "@material-ui/core";

import { ItemData, SideDrawerState } from "../../myTypes";

import { ItemContentDesktop } from "./desktopContent";

import { ItemContentMobile } from "./mobileContent";

export interface SideDrawerProps {
  open: boolean;
  closeDrawer: Function;
  sideDrawerData: SideDrawerState | undefined;
  addItemToCart: Function;
  removeItemFromCart: Function;
  shoppingCart: ItemData[];
}

export const SideDrawer = ({
  open,
  closeDrawer,
  sideDrawerData,
  addItemToCart,
  shoppingCart,
  removeItemFromCart,
}: SideDrawerProps) => {
  let isWideScreen = useMediaQuery("(min-width: 600px)");
  let isTallScreen = useMediaQuery("(min-height: 600px)");
  let isDesktop = useMediaQuery("(min-aspect-ratio: 6/5)");

  return (
    <Fade
      in={sideDrawerData ? open : false}
      timeout={{ appear: 1000, enter: 444, exit: 555 }}
    >
      {/* Drawer Main Box */}
      <Box
        position="absolute"
        height="90%"
        width="100%"
        maxWidth="100%"
        maxHeight={isDesktop ? "90%" : "90%"}
        display="flex"
        flexDirection="column"
        justifyContent={isDesktop ? "center" : "flex-end"}
        alignItems="center"
        // border={4}
        // m={1}
        style={{
          backdropFilter: "blur(8px)",
          background: "rgba(0, 0, 0, .5)",
        }}
        overflow="auto
        "
      >
        {/* Content with margin */}
        <Box
          display="flex"
          m={1}
          maxWidth={isWideScreen ? "1200px" : "100%"}
          maxHeight="95%"
          borderRadius={8}
        >
          {sideDrawerData ? (
            <div>
              {isDesktop ? (
                <ItemContentDesktop
                  removeItemFromCart={removeItemFromCart}
                  shoppingCart={shoppingCart}
                  addItemToCart={addItemToCart}
                  closeDrawer={closeDrawer}
                  sideDrawerData={sideDrawerData}
                />
              ) : (
                <ItemContentMobile
                  removeItemFromCart={removeItemFromCart}
                  shoppingCart={shoppingCart}
                  addItemToCart={addItemToCart}
                  closeDrawer={closeDrawer}
                  sideDrawerData={sideDrawerData}
                />
              )}
            </div>
          ) : (
            <></>
          )}
        </Box>
        {/* Bottom action buttons */}
      </Box>
    </Fade>
  );
};

export interface ItemContentProps {
  sideDrawerData: SideDrawerState;
  closeDrawer: Function;
  addItemToCart: Function;
  removeItemFromCart: Function;
  shoppingCart: ItemData[];
}
