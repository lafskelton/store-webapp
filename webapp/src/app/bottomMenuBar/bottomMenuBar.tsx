import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AllInclusiveTwoToneIcon from "@material-ui/icons/AllInclusiveTwoTone";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

const useStyles = makeStyles({
  bottomMenuBar: {
    bottom: 0,
    left: 0,
    margin: "auto",
    position: "fixed",
    height: "10%",
    width: "100%",
    backdropFilter: "blur(6px)",
    //
    backgroundColor: "rgba(40, 15, 15, 0.4)",
    // backgroundColor:
    //   "linear-gradient(rgba(40, 15, 15, 0.5), rgba(40, 15, 15, 0.5))",
  },
});

interface BottomMenuBarProps {
  value: string;
  setValue: any;
  handleChange: any;
}

function BottomMenuBar({ value, setValue, handleChange }: BottomMenuBarProps) {
  const classes = useStyles();

  // function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  //   event.preventDefault();
  //   console.info("You clicked a breadcrumb.");
  // }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.bottomMenuBar}
    >
      <BottomNavigationAction
        // label="Hyperbola"
        value="Home"
        icon={<AllInclusiveTwoToneIcon style={{ fontSize: 44 }} />}
        style={{ color: "#501515" }}
      />
      <BottomNavigationAction
        // label="Browse"
        value="Browse"
        icon={<DashboardTwoToneIcon style={{ fontSize: 44 }} />}
        style={{ color: "#501515" }}
      />
      {/* <BottomNavigationAction
        // label="Categories"
        value="Categories"
        icon={<AppsTwoToneIcon />}
      /> */}
      <BottomNavigationAction
        // label="Cart"
        value="Cart"
        icon={<ShoppingCartTwoToneIcon style={{ fontSize: 44 }} />}
        selected
        style={{ color: "#501515", WebkitTapHighlightColor: "#000000" }}
        // color=""
      />
    </BottomNavigation>
  );
}

export default BottomMenuBar;
