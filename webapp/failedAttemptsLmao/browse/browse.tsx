import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import "./browse.css";
import { BrowseSection } from "./section";

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

interface BrowseProps {
  startFade: boolean;
}

export default function Browse({ startFade }: BrowseProps) {
  const classes = useStyles();

  const itemIDList = [
    "7b32e09c-297b-4476-a1b0-6e640357d29f",
    "7b32e09c-297b-4476-a1b0-6e640357d29f",
    "7b32e09c-297b-4476-a1b0-6e640357d29f",
    "7b32e09c-297b-4476-a1b0-6e640357d29f",
  ];

  return (
    <Box className={classes.root}>
      <BrowseSection
        startFade={startFade}
        sectionHeading={"for you"}
        itemIDList={itemIDList}
      />

      {/* Extra room to accomodate overflow   */}
      <Box height={66}></Box>
    </Box>
  );
}
