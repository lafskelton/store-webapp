import { useState, useEffect } from "react";
import ButtomMenuBar from "./bottomMenuBar/bottomMenuBar";
import Home from "./views/home/home";
import Browse, { loadBrowseManifest } from "./views/browse_v3/browse";
import Cart from "./views/cart/cart";
import { Slide, Box } from "@material-ui/core";
import {
  BrowseManifest,
  ItemData,
  ShoppingCartItem,
  SideDrawerState,
} from "./myTypes";
import { SideDrawer } from "./views/drawer_v2/drawer";
import { useMediaQuery } from "@material-ui/core";

function App() {
  const [menuSelectState, setMenuSelectState] = useState("Home");
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  const [sideDrawer, setSideDrawer] = useState<SideDrawerState | undefined>(
    undefined
  );
  const [exitTimer, setExitTimer] = useState<boolean>(false);
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);
  const [manifest, setManifest] = useState<BrowseManifest | undefined>();

  const isDesktop = useMediaQuery("(min-aspect-ratio: 6/5)");

  // Shopping cart func
  const addItemToCart = (
    item: ItemData,
    variant: number,
    size: "xsm" | "sm" | "md" | "lg" | "xlg",
    qty: number
  ) => {
    let cartItem: ShoppingCartItem = {
      item: item,
      variant: variant,
      size: size,
      qty: qty,
    };
    let newCart = shoppingCart.concat([cartItem]);
    window.sessionStorage.setItem("shoppingCart", JSON.stringify(newCart));
    console.log(newCart);

    setShoppingCart(newCart);
  };

  const removeItemFromCart = (item: ItemData) => {
    let newCart = shoppingCart.filter((elem) => elem.item.id !== item.id);
    window.sessionStorage.setItem("shoppingCart", JSON.stringify(newCart));
    console.log(newCart);
    setShoppingCart(newCart);
  };
  // MAIN PAGE VIEW CONTROLLER
  //Controls visible page & animated page transitions
  const handleViewChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    if (newValue === menuSelectState) {
      if (showSideDrawer) {
        setShowSideDrawer(false);
        setTimeout(() => {
          //Slide back in after 666 ms
          setSideDrawer(undefined);
        }, 500);
      }
      return;
    }
    //Slide out the view
    setExitTimer(true);
    setShowSideDrawer(false);

    //These timeouts ensure a smooth transitions between pages

    //After 250 ms, change page state
    setTimeout(() => {
      //Set menu state
      setMenuSelectState(newValue);
      setTimeout(() => {
        //Slide back in after 666 ms
        setSideDrawer(undefined);
        setExitTimer(false);
      }, 500);
    }, 555);
  };

  //runs when the selected view changes
  //Ensure the manifest is loaded or loading on page change
  useEffect(() => {}, [menuSelectState]);

  //Load Data
  useEffect(() => {
    //Load data
    if (manifest) return;
    loadBrowseManifest().then((m) => {
      console.log(m);
      setManifest(m);
    });
  }, [manifest]);

  useEffect(() => {
    if (shoppingCart.length === 0) {
      let cartJSON = window.sessionStorage.getItem("shoppingCart");
      console.log("got a cart on load hehe ", cartJSON);
      if (cartJSON) {
        let cart: ShoppingCartItem[] | undefined = JSON.parse(cartJSON);

        if (cart) {
          setShoppingCart(shoppingCart.concat(cart));
        }
      }
    }
  }, []);

  const openSideDrawer = (newState: SideDrawerState) => {
    if (!showSideDrawer) {
      //Slide out
      setSideDrawer(newState);
      setTimeout(() => {
        //Slide in
        setShowSideDrawer(true);
      }, 300);
    } else {
      //If already open, close for 1/2 second then open again with new obj

      //Slide out
      setShowSideDrawer(false);
      setTimeout(() => {
        //New content
        setSideDrawer(newState);
        setTimeout(() => {
          //Slide in
          setShowSideDrawer(true);
        }, 250);
      }, 250);
    }
  };
  const closeDrawer = () => {
    setShowSideDrawer(false);
    setTimeout(() => {
      //Slide in
      setSideDrawer(undefined);
    }, 300);
  };

  return (
    <>
      {/* page content slider */}
      <Box
        position="absolute"
        display="flex"
        top={0}
        left={0}
        height="100%"
        width="100%"
        overflow={sideDrawer ? "hidden visible" : "auto"}
      >
        <div
          style={{
            display: menuSelectState === "Home" ? "contents" : "none",
          }}
        >
          <Box
            m={1}
            display="flex"
            flexDirection="column"
            width={menuSelectState === "Home" ? "100%" : "0%"}
            height="89%"
            border={1}
          >
            <Home
              show={menuSelectState === "Home"}
              exiting={exitTimer}
              key="home-root"
            />
          </Box>
        </div>

        <div
          style={{
            display: menuSelectState === "Browse" ? "contents" : "none",
          }}
        >
          <Browse
            key="browse-root"
            show={menuSelectState === "Browse"}
            exiting={exitTimer}
            manifest={manifest}
            setManifest={setManifest}
            openSideDrawer={openSideDrawer}
            shoppingCart={shoppingCart}
          />
        </div>
        <div
          style={{
            display: menuSelectState === "Cart" ? "contents" : "none",
          }}
        >
          <Box
            m={1}
            display="flex"
            flexDirection="column"
            width={menuSelectState === "Cart" ? "100%" : 0}
            height="88%"
          >
            <Cart
              show={menuSelectState === "Cart"}
              exiting={exitTimer}
              key="cart-root"
              shoppingCart={shoppingCart}
              removeItemFromCart={removeItemFromCart}
            />
          </Box>
        </div>
      </Box>

      {/* Backdrop Gradient, slides in on load */}
      <Slide
        direction="up"
        in={true}
        timeout={{ appear: 3333, enter: 2222, exit: 333 }}
        unmountOnExit
        mountOnEnter
      >
        <Box
          position="fixed"
          display="flex"
          top={0}
          left={0}
          height="100%"
          width="100%"
          maxHeight="100%"
          maxWidth="100%"
          zIndex={-100}
          style={{
            background: "linear-gradient(to top,#564399, #501515)",
          }}
        ></Box>
      </Slide>

      {/* Side Drawer */}
      <Box
        position="absolute"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        // alignItems="center"
        // flexGrow={1}
        top={0}
        left={0}
        height={sideDrawer ? "100%" : "0%"}
        width={sideDrawer ? (isDesktop ? "99%" : "100%") : "0%"}
        maxHeight="100%"
        // boxShadow={10}
        maxWidth="100%"
        overflow="hidden"
      >
        <SideDrawer
          open={showSideDrawer ? true : false}
          closeDrawer={closeDrawer}
          sideDrawerData={sideDrawer}
          shoppingCart={shoppingCart}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
        />
      </Box>

      {/* Menu bar div */}
      <ButtomMenuBar
        handleChange={handleViewChange}
        setValue={setMenuSelectState}
        value={menuSelectState}
      />
    </>
  );
}

export default App;
