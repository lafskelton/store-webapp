import {
  Box,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { ArrowLeftTwoTone, ArrowRightTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { SideDrawerState } from "../../myTypes";
import CloseIcon from "@material-ui/icons/Close";

import { ItemContentDesktop } from "./desktopContent";

import { ItemContentMobile } from "./mobileContent";

export interface SideDrawerProps {
  closeDrawer: Function;
  sideDrawerData: SideDrawerState;
}

export const SideDrawer = ({
  closeDrawer,
  sideDrawerData,
}: SideDrawerProps) => {
  return (
    //Main scaffold
    <Box
      // bottom={0}
      display="flex"
      flexGrow={1}
      flexDirection="column"
      maxWidth="95%"
      width="100%"
      // m={1}
      maxHeight="100%"
      // border={1}
      color="#ffffff"
      // style={{ filter: "blur(0px)" }}
      // overflow="scroll"
    >
      {/* Top Row: Title & Close button */}
      {/* Middle Row: Image Gallery & Item Desc */}
      {useMediaQuery("(min-aspect-ratio: 6/5)") ? (
        <ItemContentDesktop
          closeDrawer={closeDrawer}
          sideDrawerData={sideDrawerData}
        />
      ) : (
        <ItemContentMobile
          closeDrawer={closeDrawer}
          sideDrawerData={sideDrawerData}
        />
      )}
    </Box>
  );
};

export interface ItemContentProps {
  sideDrawerData: SideDrawerState;
  closeDrawer: Function;
}
