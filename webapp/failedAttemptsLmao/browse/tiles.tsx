import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import "./browse.css";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  browseTileRoot: {
    height: "95%",
    overflow: "hidden",
    position: "relative",
    //   background:
    //     "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%)",
  },
  browseTileBar: {
    position: "relative",
    bottom: 2,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)",
  },
});
export function createRipple(event: React.MouseEvent<HTMLElement, MouseEvent>) {
  console.log(event);
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${
    event.clientY + window.scrollY - button.offsetTop - radius
  }px`;
  circle.style.background =
    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.66) 50%, rgba(0,0,0,0) 100%)";
  // "radial-gradient(at top, rgba(0,0,0,1), yellow, green, blue, indigo, violet);";
  circle.classList.add("ripple");

  console.log(event.clientX);

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

export interface ItemData {
  id: string;
  title: string;
  price: number;
  desc: string;
  tileImg: string;
  galleryImgList: string[];
}
export interface BrowseTileProps {
  itemData: ItemData;
  itemLoaded: boolean;
  fullWidth?: boolean;
  openItem: Function;
}

export function BrowseTile({
  itemData,
  itemLoaded,
  fullWidth = false,
  openItem,
}: BrowseTileProps) {
  const classes = useStyles();

  //item data state

  const click = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    //Ripple animation
    createRipple(event);
    //Open item Page
    openItem(itemData.id);
  };

  return (
    <Box
      className={classes.browseTileRoot}
      width={fullWidth ? "98%" : "48%"}
      borderRadius={12}
      // borderColor={"#3c2b40"}
      onClick={click}
    >
      <Box display="flex" height={"77%"}>
        {itemLoaded ? (
          <img
            src={itemData.tileImg}
            // alt={itemTitle}
            style={{ width: "100%", height: "150%", borderRadius: 12 }}
          />
        ) : (
          <Skeleton variant="rect" width="100%" height="150%" />
        )}
      </Box>
      <Box
        display="flex"
        height={"24%"}
        // border={0}
        borderRadius={0}
        className={classes.browseTileBar}
      >
        <Box p={2}>
          <Typography variant={"subtitle1"}>{itemData.title}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
