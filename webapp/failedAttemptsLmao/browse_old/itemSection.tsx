import { Typography, Box } from "@material-ui/core";
import {
  ItemData,
  RowData,
  SectionData,
  SideDrawerState,
} from "./../../myTypes";
import { makeStyles } from "@material-ui/core";
import { createRipple } from "./lib/ripple";
import { useMediaQuery } from "@material-ui/core";

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
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)",
    // zIndex: 1065,
  },
});

export interface SectionProps {
  sectionData: SectionData;
  children?: JSX.Element;
}
export const Section = ({ sectionData, children }: SectionProps) => {
  return (
    <>
      <Box flex m={1} p={1}>
        <Typography
          variant="h2"
          style={{ color: "#ffffff", fontSize: 69 }}
          align="center"
        >
          {sectionData.sectionTitle}
        </Typography>
      </Box>

      <>{children}</>
    </>
  );
};

//Full width, double hieght tile
export interface FullSectionRowProps {
  rowId: number;
  sectionId: number;
  itemData: ItemData;
  children?: JSX.Element;
  openSideDrawer: Function;
}
export const FullSectionRow = ({
  itemData,
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
  return (
    <Box display="flex" flexDirection="row" justifyContent={"space-around"}>
      <Box
        className={classes.tile}
        // border={2}
        boxShadow={5}
        height={useMediaQuery("(min-width:600px)") ? 400 : 300}
        width="100%"
        m={1}
        onClick={(e) => click(e)}
      >
        <Box display="flex" height={"77%"}>
          <img
            src={itemData.tileImg}
            alt={""}
            style={{ width: "100%", height: "150%" }}
          />
        </Box>

        <Box
          display="flex"
          height={"24%"}
          // border={0}
          borderRadius={0}
          className={classes.tileBar}
        >
          <Box width="100%">
            <Typography variant={"h3"} style={{ color: "#ffffff" }}>
              &nbsp;${itemData.price}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

//Double tile row
export interface DoubleSectionRowProps {
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

  return (
    <Box display="flex" flexDirection="row" justifyContent={"space-around"}>
      <Box
        className={classes.tile}
        // border={2}
        boxShadow={5}
        width="50%"
        height={useMediaQuery("(min-width:600px)") ? 250 : 175}
        m={1}
        onClick={(e) => click(e, true)}
      >
        <Box display="flex" height={"77%"}>
          <img
            src={leftItemData.tileImg}
            alt={""}
            style={{ width: "100%", height: "150%" }}
          />
        </Box>

        <Box
          display="flex"
          height={"24%"}
          // border={0}
          borderRadius={0}
          className={classes.tileBar}
        >
          <Box width="100%">
            <Typography variant={"h3"} style={{ color: "#ffffff" }}>
              &nbsp;${leftItemData.price}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        className={classes.tile}
        // border={2}
        boxShadow={5}
        width="50%"
        maxWidth="%50"
        height={useMediaQuery("(min-width:600px)") ? 250 : 175}
        m={1}
        onClick={(e) => click(e, false)}
        key={`${sectionId}_${rowId}_rightTile`}
      >
        <Box display="flex" height={"77%"}>
          <img
            src={rightItemData.tileImg}
            alt={""}
            style={{ width: "100%", height: "150%" }}
          />
        </Box>

        <Box
          display="flex"
          height={"24%"}
          // border={0}
          borderRadius={0}
          className={classes.tileBar}
        >
          <Box width="100%">
            <Typography variant={"h3"} style={{ color: "#ffffff" }}>
              &nbsp;${rightItemData.price}
            </Typography>
          </Box>
        </Box>
      </Box>
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
