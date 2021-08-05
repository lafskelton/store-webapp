import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bottomMenuBar: {
    bottom: 0,
    margin: "auto",
    position: "fixed",
    width: "100%",
  },
});

interface CartProps {}

export default function Cart({}: CartProps) {
  const classes = useStyles();

  return <p>Cart</p>;
}
