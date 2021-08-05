import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Fade, Collapse } from "@material-ui/core";
import readItem from "./api/readItem";
import { BrowseTile, ItemData } from "./tiles";
import "./browse.css";
import ItemDrawer from "./itemdrawer/itemdrawer";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    maxWidth: 666,
  },
  sectionTitle: {
    padding: 14,
  },
  browseRow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    width: "100%",
    flexGrow: 1,
  },
  browseRowTiles: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-around",
    // alignContent: "center",
    height: 250,
    width: "100%",
  },
});

//Browse row attaches the item drawer to the tiles

export interface BrowseRowProps {
  leftTileID: string | undefined;
  rightTileID: string | undefined;
  openDrawerId: number;
  setOpenDrawerId: Function;
  rowId: number;
}

export function BrowseRow({
  leftTileID,
  rightTileID,
  openDrawerId,
  setOpenDrawerId,
  rowId,
}: BrowseRowProps) {
  const classes = useStyles();
  const [itemDrawerOpen, setItemDrawerOpen] = useState<boolean>(false);
  const [drawerItemId, setDrawerItemId] = useState<string>("");
  //Tile Item Data
  const [leftTileData, setLeftTileData] = useState<ItemData>();
  const [rightTileData, setRightTileData] = useState<ItemData>();

  //Handle item click
  const tileClicked = (id: string) => {
    //The same tile was clicked, toggle action
    console.log("global", openDrawerId);

    if (itemDrawerOpen && id === drawerItemId) {
      //Toggle drawer
      setItemDrawerOpen(false);
      return;
      // the opposing tile was clicked, transition to it!
    } else if (itemDrawerOpen && id !== drawerItemId) {
      //Change drawer
      setItemDrawerOpen(false);
      setTimeout(() => {
        setDrawerItemId(id);
        setTimeout(() => {
          setItemDrawerOpen(true);
        }, 250);
      }, 250);
      return;
    }
    if (!itemDrawerOpen) {
      // open drawer
      setDrawerItemId(id);
      setItemDrawerOpen(true);
    }
  };

  const closeDrawer2 = () => {
    // close drawer
    setDrawerItemId("");
    setItemDrawerOpen(false);
  };

  //Load the right tile if it's ID is not null
  const loadRightTile = () => {
    // Do not reload if already loaded!
    if (rightTileData) {
      return;
    }
    // Assert non-nill ID
    if (!rightTileID || rightTileID === "") {
      return;
    }
    //Set empty struct to allow skeleton animations
    setRightTileData({
      id: "",
      title: "",
      price: 0,
      desc: "",
      tileImg: "",
      galleryImgList: [],
    });
    //call api

    readItem(rightTileID).then((res) => {
      let obj: ItemData = res.data.Item_object;

      setRightTileData(obj);
    });
  };
  const loadLeftTile = () => {
    // Do not reload if already loaded!
    if (leftTileData) {
      return;
    }

    // Assert non-nil ID
    if (!leftTileID || leftTileID === "") {
      return;
    }

    //Set empty struct to allow skeleton animations
    setLeftTileData({
      id: "",
      title: "",
      price: 0,
      desc: "",
      tileImg: "",
      galleryImgList: [],
    });

    //call api for data
    readItem(leftTileID).then((res) => {
      console.log("json", res.data.Item_object);
      let obj: ItemData = res.data.Item_object;

      setLeftTileData(obj);
    });
  };
  //Load left on start
  loadLeftTile();
  //Load right on start
  loadRightTile();

  return (
    <Fade
      in={true}
      timeout={{ appear: 333, enter: 333, exit: 10 }}
      mountOnEnter
      unmountOnExit
    >
      <Box className={classes.browseRow}>
        <Collapse in={!itemDrawerOpen}>
          <Box className={classes.browseRowTiles}>
            {/* Left tile */}
            {leftTileData ? (
              <BrowseTile
                itemData={leftTileData}
                itemLoaded={leftTileData.tileImg !== "" ? true : false}
                openItem={tileClicked}
              />
            ) : (
              <></>
            )}
            {/* Right tile */}
            {rightTileData ? (
              <BrowseTile
                itemData={rightTileData}
                itemLoaded={rightTileData.tileImg !== "" ? true : false}
                openItem={tileClicked}
              />
            ) : (
              <></>
            )}
          </Box>
        </Collapse>

        {/* itemDrawer */}

        <Collapse in={itemDrawerOpen} unmountOnExit mountOnEnter>
          <ItemDrawer closeDrawer={closeDrawer2} itemId={drawerItemId} />
        </Collapse>
      </Box>
    </Fade>
  );
}
