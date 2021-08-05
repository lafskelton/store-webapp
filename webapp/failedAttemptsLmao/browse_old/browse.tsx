import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Divider, Typography } from "@material-ui/core";
import {
  BrowseManifest,
  ItemData,
  RowType,
  SideDrawerState,
} from "./../../myTypes";
import "./browse.css";
import {
  Section,
  FullSectionRow,
  DoubleSectionRow,
  SingleSectionRow,
} from "./itemSection";

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
});

interface BrowseProps {
  manifest: BrowseManifest | undefined;
  openSideDrawer: Function;
}

export default function Browse({ manifest, openSideDrawer }: BrowseProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {manifest !== undefined ? (
        <>
          {/* Iterate over sections and construct them */}
          {manifest.browseMap.map((section) => (
            <Section key={`section_${section.sectionId}`} sectionData={section}>
              <>
                {/* Render out browse map by row type */}
                {section.rows.map((row, i) => {
                  switch (row.rowType) {
                    case RowType.full:
                      console.log(row);
                      return (
                        <FullSectionRow
                          rowId={row.rowId}
                          sectionId={row.sectionId}
                          key={`section_${section.sectionId}_fullrow_${row.rowId}`}
                          itemData={row.items[0]}
                          openSideDrawer={openSideDrawer}
                        />
                      );
                    case RowType.double:
                      console.log("row", row);
                      return (
                        <DoubleSectionRow
                          key={`section_${section.sectionId}_doublerow_${row.rowId}`}
                          sectionId={row.sectionId}
                          rowId={row.rowId}
                          leftItemData={row.items[0]}
                          rightItemData={row.items[1]}
                          openSideDrawer={openSideDrawer}
                        />
                      );
                    case RowType.single:
                      console.log("row", row);

                      return (
                        <SingleSectionRow
                          key={`section_${section.sectionId}_singlerow_${row.rowId}`}
                          itemData={row.items[0]}
                          sectionId={row.sectionId}
                          rowId={row.rowId}
                          openSideDrawer={openSideDrawer}
                        />
                      );
                  }
                })}
              </>
            </Section>
          ))}
        </>
      ) : (
        <h1>loading</h1>
      )}

      {/* Section One Title */}

      {/* Extra room to accomodate overflow   */}
      <Box height={66}></Box>
    </Box>
  );
}
