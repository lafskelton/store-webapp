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
  let isDesktop = useMediaQuery("(min-aspect-ratio: 6/5)");

  return (
    <Fade
      in={sideDrawerData ? open : false}
      timeout={{ appear: 444, enter: 444, exit: 555 }}
    >
      {/* Drawer Main Box */}
      <Box
        height="100%"
        width="100%"
        maxWidth="100%"
        maxHeight="100%"
        display="flex"
        style={{
          backdropFilter: "blur(8px)",
          background: "rgba(0, 0, 0, .5)",
        }}
        overflow="clip"
      >
        <Box
          height="89%"
          width="100%"
          maxWidth="100%"
          maxHeight="89%"
          m={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Content with margin */}
          <Box
            display="flex"
            m={1}
            maxWidth="1000px"
            height="100%"
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
