import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Slide,
  Typography,
  Fade,
  useMediaQuery,
  Divider,
  IconButton,
  Collapse,
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CloseSharp, DeleteOutline } from "@material-ui/icons";
import { ItemData } from "../../myTypes";

function createData(name: string, price: number, quantity: number) {
  return { name, price, quantity };
}

const rows = [
  createData("Frozen yoghurt", 159, 1),
  createData("Ice cream sandwich", 237, 1),
  createData("Eclair", 262, 1),
  createData("Cupcake", 305, 1),
];

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
  shoppingCart: ItemData[];
  removeItemFromCart: Function;
}

export default function MyCart({
  slideIn,
  changeView,
  shoppingCart,
  removeItemFromCart,
}: MyCartProps) {
  const classes = useStyles();

  const isDesktop = useMediaQuery("(min-aspect-ratio: 6/5)");

  return (
    <Box
      display="flex"
      // m={1}
      flexDirection="column"
      // overflow="hidden"
      maxWidth={666}
      width="98%"
      height="100%"
    >
      <Slide
        in={slideIn}
        timeout={{ enter: 888, appear: 888, exit: 333 }}
        direction="left"
        unmountOnExit
        mountOnEnter
      >
        <Box display="flex" m={3} flexDirection="row" justifyContent="center">
          <Typography
            variant="h2"
            align="center"
            className={classes.headerText}
          >
            Shopping Cart
          </Typography>
        </Box>
      </Slide>

      <Fade in={slideIn} timeout={{ enter: 888, appear: 888, exit: 333 }}>
        <Box
          display="flex"
          m={1}
          flexDirection="column"
          flexGrow={1}
          overflow="hidden"
        >
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
                {shoppingCart.map((item, i) => {
                  let fadeIn = true;
                  return (
                    <Fade
                      in={fadeIn && slideIn}
                      timeout={1500 + i * 500}
                      unmountOnExit
                      mountOnEnter
                    >
                      <TableRow key={item.title}>
                        <TableCell component="th" scope="row">
                          <Typography variant="subtitle1">
                            {item.title}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="subtitle1">
                            {item.price}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle1">{1}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => {
                              fadeIn = false;

                              removeItemFromCart(item);
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
      <br />
    </Box>
  );
}
