import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Fade,
  IconButton,
  Slide,
  Typography,
  Zoom,
} from "@material-ui/core";
import { ArrowLeftTwoTone, ArrowRightTwoTone } from "@material-ui/icons";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { ItemContentProps } from "./drawer";

export const ItemContentDesktop = ({
  sideDrawerData,
  closeDrawer,
  addItemToCart,
  shoppingCart,
  removeItemFromCart,
}: ItemContentProps) => {
  //Image Gallery Controller
  const [slideDir, setSlideDir] = useState<
    "right" | "left" | "up" | "down" | undefined
  >("right");
  const [slideIn, setSlideIn] = useState<boolean>(true);
  const [galleryPos, setGalleryPos] = useState<number>(0);
  const [galleryOffset, setGalleryOffset] = useState<number>(0);

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
      }, 555);
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
      }, 555);
    }
  };

  return (
    // Item Content
    <Box display="flex" flexDirection="row" height="100%" borderRadius={6}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={1}
      >
        {/* Desktop Rounded Image Box */}
        <Box
          display="flex"
          position="relative"
          borderRadius={12}
          overflow="hidden"
          boxShadow={5}
          width="100%"
          maxWidth="100%"
        >
          {/* Navigation arrows */}
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
                <ArrowRightTwoTone style={{ fontSize: 69, color: "black" }} />
              </IconButton>
            </Box>
          </Box>

          {/* Image Slider */}
          <Slide
            in={slideIn}
            direction={slideDir}
            timeout={{ enter: 500, appear: 1000, exit: 500 }}
          >
            <img
              src={sideDrawerData.itemData.galleryImgList[galleryPos].imgSrc}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Slide>
        </Box>
      </Box>

      {/* Content Area */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={1}
      >
        <Fade in={true} timeout={2222}>
          <Box
            display="flex"
            flexDirection="column"
            m={1}
            justifyContent="spa"
            width="100%"
            height="100%"
          >
            {/* Item Title & Close */}
            <Box
              display="flex"
              flexDirection="row"
              m={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" m={1}>
                <Typography variant="h2" style={{ color: "#ffffff" }}>
                  {sideDrawerData.itemData.title}
                </Typography>
              </Box>

              <Box display="flex" m={1}>
                <IconButton
                  size="small"
                  onClick={() => {
                    closeDrawer();
                  }}
                >
                  <CloseIcon
                    style={{
                      fontSize: 33,
                    }}
                  />
                </IconButton>
              </Box>
            </Box>

            {/* Variant Action Area */}
            <Box
              display="flex"
              m={1}
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
                        borderRadius: 12,
                        height: 40,
                        width: 40,
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
            {/* Description Area */}
            <Box display="flex" flexDirection="row" m={1} flexGrow={1}>
              <Typography variant="h5" style={{ color: "#ffffff" }}>
                {sideDrawerData.itemData.galleryImgList[galleryPos].imgDesc}
              </Typography>
            </Box>
            {/* Action Buttons */}
            <Slide
              in={true}
              direction="up"
              timeout={{ appear: 1000, enter: 1000, exit: 333 }}
            >
              {/* Outer container */}
              <Box
                height="10%"
                display="flex"
                flexDirection="row"
                justifyContent="center"
              >
                {/* Info Action Area */}

                <Box
                  display="flex"
                  m={1}
                  color="#ffffff"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Fade
                    in={true}
                    timeout={{ enter: 2222, appear: 2222, exit: 333 }}
                  >
                    <Button
                      size="large"
                      onClick={() => {
                        {
                          shoppingCart.includes(sideDrawerData.itemData)
                            ? removeItemFromCart(sideDrawerData.itemData)
                            : addItemToCart(sideDrawerData.itemData);
                        }
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontSize: 22,
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
              </Box>
            </Slide>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};
