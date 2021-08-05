import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import { Typography, IconButton } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import CloseIcon from "@material-ui/icons/Close";
import ImageGallery from "./imageGallery";

const useStyles = makeStyles({
  root: {
    display: "flex",
    // flexWrap: "wrap",
    margin: "auto",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 666,
  },
  browseRowDrawer: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-around",
    // alignContent: "center",
    overflow: "hidden",
    position: "relative",
  },
});

interface ItemDrawerProps {
  closeDrawer: Function;
  itemId: string;
}
export default function ItemDrawer({ closeDrawer, itemId }: ItemDrawerProps) {
  const classes = useStyles();
  const [closing, setClosing] = React.useState<boolean>(false);
  const onCloseAnimation = () => {
    setClosing(true);
    setTimeout(() => {
      closeDrawer();
    }, 333);
  };

  //Resolve item
  // => itemId

  const [itemName, setItemName] = React.useState<string>("Sweater #1");
  const [itemDesc, setItemDesc] = React.useState<string>(
    "trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash trash "
  );
  // const matches = useMediaQuery("(min-width:666px)");

  // var drawerHeight: number = 0;

  // if (matches) {
  //   drawerHeight = 1000;
  // } else {
  //   drawerHeight = 500;
  // }
  return (
    <Box
      className={classes.browseRowDrawer}
      display="flex"
      flexDirection={"column"}
      flexGrow={1}
      // height={drawerHeight}
    >
      {/* <Box width={"100%"} height={25} /> */}
      {/* <Box width={"80%"} margin="auto">
        <Divider />
      </Box> */}

      {/* Close button box */}
      <Box
        display="flex"
        flexDirection="row-reverse"
        width={"87%"}
        margin="auto"
        p={1}
      >
        <IconButton
          onClick={() => {
            onCloseAnimation();
          }}
        >
          <CloseIcon style={{ fontSize: 25 }} />
        </IconButton>
      </Box>

      {/* Box main area */}

      <ImageGallery closing={closing} />

      {/* ITEM INFORMATION */}

      {/* Item Title */}
      <Box
        p={1}
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
      >
        {itemName.length > 0 ? (
          <Typography
            variant="h4"
            align="center"
            style={{ fontFamily: "'Laila', sans-serif" }}
          >
            {itemName}
          </Typography>
        ) : (
          <Skeleton variant="rect" width={"47%"} height={25} />
        )}
        {itemName.length > 0 ? (
          <Typography
            variant="h4"
            align="center"
            style={{ fontFamily: "'Laila', sans-serif" }}
          >
            {"$5.99"}
          </Typography>
        ) : (
          <Skeleton variant="rect" width={"47%"} height={25} />
        )}
      </Box>

      {/* Price and variants */}
      <Box
        p={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        {/* Description */}

        {itemDesc.length > 0 ? (
          <Typography variant="subtitle1" align="left">
            {itemDesc}
          </Typography>
        ) : (
          <>
            <Skeleton variant="rect" width={"92%"} height={22} />
            <Box width={"100%"} height={10}></Box>
            <Skeleton variant="rect" width={"90%"} height={22} />
            <Box width={"100%"} height={10}></Box>
            <Skeleton variant="rect" width={"92%"} height={22} />
            <Box width={"100%"} height={10}></Box>
            <Skeleton variant="rect" width={"90%"} height={22} />
          </>
        )}
      </Box>

      {/* Buttom divider */}
      <Box display="flex" flexGrow={1} height={23} />
      {/* <Box width={"80%"} margin="auto">
        <Divider />
      </Box> */}
      {/* <Box width={"100%"} height={25} /> */}
    </Box>
  );
}
