import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Fade,
  Slide,
  Typography,
  Zoom,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { ItemContentProps } from "./drawer";

export const ItemContentMobile = ({
  sideDrawerData,
  closeDrawer,
  shoppingCart,
  removeItemFromCart,
  addItemToCart,
}: ItemContentProps) => {
  //Image Gallery Controller
  const [loaded, setLoaded] = useState<boolean>(false);
  const [slideDir, setSlideDir] = useState<
    "right" | "left" | "up" | "down" | undefined
  >("right");
  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [galleryPos, setGalleryPos] = useState<number>(0);
  const [galleryOffset, setGalleryOffset] = useState<number>(0);
  // setTimeout(() => {
  //   setSlideIn(true);
  // }, 500);
  //Controls left & right transition of gallery images
  const galleryController = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isLeft: boolean
  ) => {
    if (isLeft) {
      // Move Left
      //Slide out to the right
      setSlideDir("right");
      setSlideIn(false);

      setTimeout(() => {
        setSlideDir("left");

        //spinny index thing
        setGalleryPos(
          (galleryOffset + 1) % sideDrawerData.itemData.galleryImgList.length
        );
        setGalleryOffset(galleryOffset + 1);

        setTimeout(() => {
          setSlideIn(true);
        }, 250);
      }, 666);
    } else {
      // Move Right
      //Slide out to the right
      setSlideDir("left");
      setSlideIn(false);

      setTimeout(() => {
        setSlideDir("right");

        //spinny index thing
        setGalleryPos(
          (galleryOffset + 1) % sideDrawerData.itemData.galleryImgList.length
        );
        setGalleryOffset(galleryOffset + 1);

        setTimeout(() => {
          setSlideIn(true);
        }, 250);
      }, 666);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSlideIn(true);
      setTimeout(() => {
        setLoaded(true);
      }, 666);
    }, 666);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      // height="100%"
      // width="100%"
      onTouchStart={(touchStartEvent) => console.log(touchStartEvent)}
      onTouchMove={(touchMoveEvent) => console.log(touchMoveEvent)}
      onTouchEnd={(e) => console.log()}
      border={1}
    >
      {/* Desktop Rounded Image Box */}
      <Box
        display="flex"
        position="relative"
        borderRadius={12}
        // m={1}
        // maxHeight="50%"
        maxWidth="100%"
        overflow="hidden"
        // bgcolor=""
        boxShadow={2}
      >
        {/* Navigation arrows
          <Box
            display="flex"
            flexGrow={1}
            position="absolute"
            width="100%"
            height="100%"
          >
            <Box display="flex" flexGrow={1} height="100%">
              <IconButton
                style={{ height: "100%" }}
                onClick={(e) => galleryController(e, true)}
              >
                <ArrowLeftTwoTone style={{ fontSize: 69, color: "black" }} />
              </IconButton>
            </Box>
            <Box display="flex" flexGrow={1} height="100%" width="100%"></Box>
            <Box display="flex" flexGrow={1} height="100%">
              <IconButton
                style={{ height: "100%" }}
                onClick={(e) => galleryController(e, false)}
              >
                {" "}
                <ArrowRightTwoTone style={{ fontSize: 69, color: "black" }} />
              </IconButton>
            </Box>
          </Box> */}

        {/* Image Slider */}
        <Slide in={slideIn} direction={slideDir} timeout={555}>
          <img
            src={sideDrawerData.itemData.galleryImgList[galleryPos].imgSrc}
            style={{ width: "100%", height: "100%" }}
          />
        </Slide>
      </Box>

      {/* Content Area */}
      <Fade in={true} timeout={2222}>
        {/* Top oriented box */}
        <Box
          display="flex"
          flexDirection="column"
          m={1}
          flexGrow={1}
          justifyContent="space-around"
          alignItems="center"
        >
          {/* Item Title & Price */}
          <Box display="flex" flexDirection="column" m={1} width="100%">
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-between"
            >
              <Typography variant="h2" style={{ color: "#ffffff" }}>
                {sideDrawerData.itemData.title}
              </Typography>
              <Typography
                variant="h2"
                align="right"
                style={{ color: "#ffffff" }}
              >
                ${sideDrawerData.itemData.price}
              </Typography>
            </Box>

            {/* Variant Action Area */}
            <Box
              display="flex"
              width="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box width="95%">
                <Divider />
              </Box>
              <Box display="flex" m={1} width="95%" flexDirection="row">
                {sideDrawerData.itemData.variantColors.map((color) => (
                  <Zoom
                    in={true}
                    timeout={{ appear: 2222, enter: 1000, exit: 333 }}
                  >
                    <ButtonBase
                      style={{
                        //Change manifest array to map with pointer index to related image
                        background: color,
                        // backgroundColor: "#000000",
                        borderRadius: 12,
                        height: 30,
                        width: 30,
                        margin: 3,
                      }}
                    />
                  </Zoom>
                ))}
              </Box>

              <Box width="95%">
                <Divider />
              </Box>
            </Box>
          </Box>

          {/* Description Area */}
          <Box display="flex" m={1} overflow="hidden">
            <Fade in={loaded}>
              <Typography variant="subtitle1" align="center">
                {sideDrawerData.itemData.galleryImgList[galleryPos].imgDesc}
              </Typography>
            </Fade>
          </Box>

          {/* Action Buttons */}
          <Slide
            in={true}
            direction="up"
            timeout={{ appear: 1000, enter: 1000, exit: 333 }}
          >
            {/* Info Action Area */}

            <Box
              display="flex"
              m={1}
              // border={0.2}
              color="#ffffff"
              // width="50%"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Fade
                in={true}
                timeout={{ enter: 2222, appear: 2222, exit: 333 }}
              >
                <Button
                  // variant="outlined"
                  size="large"
                  onClick={() => {
                    // changeView("about");
                    {
                      shoppingCart.includes(sideDrawerData.itemData)
                        ? removeItemFromCart(sideDrawerData.itemData)
                        : addItemToCart(sideDrawerData.itemData);
                    }
                  }}
                  // style={{ margin: 10 }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{
                      fontSize: 18,
                      color: "#ffffff",
                    }}
                  >
                    {shoppingCart.includes(sideDrawerData.itemData)
                      ? "Remove from cart"
                      : "add to cart"}
                  </Typography>
                </Button>
              </Fade>
            </Box>
          </Slide>
        </Box>
      </Fade>
    </Box>
  );
};
