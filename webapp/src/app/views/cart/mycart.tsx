import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Slide,
  Typography,
  Fade,
  Divider,
  IconButton,
  Button,
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { DeleteOutline } from "@material-ui/icons";
import { ItemData, ShoppingCartItem } from "../../myTypes";

const useStyles = makeStyles({
  headerText: {
    color: "#ffffff",
    // fontFamily: '"Raleway"',
  },
  headerSubtext: {
    color: "#ffffff",
    // fontFamily: '"Raleway"',
  },
  table: {
    // minWidth: 650,
    overflow: "hidden",
  },
});

export interface MyCartProps {
  slideIn: boolean;
  changeView: Function;
  shoppingCart: ShoppingCartItem[];
  removeItemFromCart: Function;
}

export default function MyCart({
  slideIn,
  changeView,
  shoppingCart,
  removeItemFromCart,
}: MyCartProps) {
  const classes = useStyles();

  // const [showCart, setShowCart] = useState<boolean>(slideIn);

  // const removeItem = (item: ItemData) => {
  //   setShowCart(false);
  //   setTimeout(() => {
  //     removeItemFromCart(item);
  //   }, 200);
  //   setTimeout(() => {
  //     setShowCart(true);
  //   }, 1000);
  // };

  return (
    <Box
      display="flex"
      m={1}
      // border={1}
      flexDirection="column"
      // overflow="hidden"
      justifyContent="space-between"
      maxWidth={666}
      width="98%"
      height="100%"
    >
      <Box display="flex" m={3} flexDirection="row" justifyContent="center">
        <Slide
          in={slideIn}
          timeout={{ enter: 888, appear: 888, exit: 333 }}
          direction="left"
          unmountOnExit
          mountOnEnter
        >
          <Typography
            variant="h2"
            align="center"
            className={classes.headerText}
          >
            Shopping Cart
          </Typography>
        </Slide>
      </Box>
      <Box display="flex" m={1} flexDirection="column" flexGrow={1}>
        <Fade in={slideIn} timeout={{ enter: 888, appear: 888, exit: 333 }}>
          <Box display="flex" m={1} flexDirection="column" overflow="hidden">
            <Divider />
            <TableContainer>
              <Table size="medium" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1">Item</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle1">Price</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle1">Quantity</Typography>
                    </TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {shoppingCart.map((cartItem, i) => {
                    return (
                      <Fade
                        in={slideIn}
                        timeout={1500 + i * 500}
                        unmountOnExit
                        mountOnEnter
                      >
                        <TableRow key={cartItem.item.title}>
                          <TableCell component="th" scope="row">
                            <Typography variant="subtitle1">
                              {cartItem.item.title}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="subtitle1">
                              {cartItem.item.price}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle1">{1}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <IconButton
                              onClick={() => {
                                removeItemFromCart(cartItem.item);
                              }}
                            >
                              <DeleteOutline
                                style={{ fontSize: 24, color: "red" }}
                              />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </Fade>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Fade>
        <Fade in={slideIn}>
          {shoppingCart.length === 0 ? (
            <Box
              display="flex"
              m={1}
              flexDirection="row"
              justifyContent="center"
              overflow="hidden"
            >
              <Typography variant="subtitle1" style={{ opacity: 0.4 }}>
                Your shopping cart is empty!
              </Typography>
            </Box>
          ) : (
            <Box></Box>
          )}
        </Fade>
      </Box>

      {/* Checkout button */}

      <Slide
        in={slideIn}
        direction="up"
        timeout={{ appear: 1000, enter: 1000, exit: 333 }}
      >
        {/* Outer container */}
        <Box height="10%" display="flex" flexDirection="row-reverse">
          {/* Info Action Area */}

          <Fade in={slideIn} timeout={{ enter: 2222, appear: 2222, exit: 333 }}>
            <Button size="large" disabled onClick={() => {}}>
              <Typography
                variant="subtitle1"
                style={{
                  // fontSize: 18,
                  color: "#ffffff",
                  opacity: shoppingCart.length === 0 ? 0.5 : 1,
                }}
                onClick={() => {
                  changeView("checkout");
                }}
              >
                checkout
              </Typography>
            </Button>
          </Fade>
        </Box>
      </Slide>
    </Box>
  );
}
