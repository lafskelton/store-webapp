import { useState, useEffect } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { BrowseRow } from "./rows";
import { useDebounceCallback } from "@react-hook/debounce";
import { v4 } from "uuid";

const useStyles = makeStyles({
  sectionTitle: {
    padding: 14,
  },
});

export interface SectionHeadingProps {
  txt: String;
}
export function SectionHeading({ txt }: SectionHeadingProps) {
  const classes = useStyles();

  return (
    <Box mx={"auto"} className={classes.sectionTitle}>
      <Typography variant={"h1"} style={{ color: "#ffffff" }}>
        {txt}
      </Typography>
    </Box>
  );
}

export interface BrowseSectionProps {
  sectionHeading: string;
  // tiles: Array<BrowseTileProps>;
  startFade: boolean;
  // tilesLoading: boolean;
  itemIDList: Array<string>;
}

export function BrowseSection({
  sectionHeading,
  // tiles,
  itemIDList,
  startFade,
}: BrowseSectionProps) {
  const [tiles, setTiles] = useState<Array<JSX.Element>>([
    <SectionHeading txt={sectionHeading} />,
  ]);

  //Offset tells the loader when to stop loading new items
  const [offset, setOffset] = useState<number>(0);

  //This array contains a boolean for each row flagging whether to open the drawer, the logic
  //requires only one value be true at a time
  const [openDrawerId, setOpenDrawerId] = useState<number>(0);

  const updateTiles = (): JSX.Element[] => {
    if (offset >= itemIDList.length) {
      return tiles;
    }
    // setSectionLoading(true);
    let rowId = 0;
    for (let index = offset; index < itemIDList.length; index = index + 2) {
      console.log(rowId);
      if (index + 1 < itemIDList.length) {
        //Request data for each tile

        //Double row

        setOffset(offset + 2);

        setTiles([
          ...tiles,
          <BrowseRow
            key={"row" + v4()}
            rowId={rowId}
            openDrawerId={openDrawerId}
            setOpenDrawerId={setOpenDrawerId}
            leftTileID={itemIDList[index]}
            rightTileID={itemIDList[index + 1]}
          />,
        ]);
      }

      if (index >= itemIDList.length - 1) {
        //single row

        setOffset(offset + 1);

        setTiles([
          ...tiles,
          <BrowseRow
            key={"row" + v4()}
            rowId={rowId}
            setOpenDrawerId={setOpenDrawerId}
            openDrawerId={openDrawerId}
            leftTileID={itemIDList[index]}
            rightTileID={undefined}
          />,
        ]);
      }
      rowId++;
    }

    return tiles;
  };

  //Render tiles
  return <>{updateTiles().map((tile) => tile)}</>;
}
