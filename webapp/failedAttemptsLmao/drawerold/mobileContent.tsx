import {
  Box,
  Button,
  ButtonBase,
  Collapse,
  Divider,
  Fade,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { ArrowLeftTwoTone, ArrowRightTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { SideDrawerState } from "../../myTypes";
import CloseIcon from "@material-ui/icons/Close";
import { ItemContentProps } from "./drawer";
import { Skeleton } from "@material-ui/lab";

export const ItemContentMobile = ({
  sideDrawerData,
  closeDrawer,
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
    console.log("effect");
    setTimeout(() => {
      setSlideIn(true);
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }, 250);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      onTouchStart={(touchStartEvent) => console.log(touchStartEvent)}
      onTouchMove={(touchMoveEvent) => console.log(touchMoveEvent)}
      onTouchEnd={(e) => console.log()}
    >
      {/* Desktop Rounded Image Box */}
      <Box
        display="flex"
        position="relative"
        flexGrow
        borderRadius={12}
        m={1}
        maxHeight="50%"
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
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Slide>
      </Box>

      {/* Content Area */}
      <Box
        display="flex"
        flexDirection="column"
        m={1}
        flexGrow={1}
        justifyContent="space-around"
      >
        <Fade in={true} timeout={2222}>
          <div>
            {/* Item Title & Price */}
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Box display="flex">
                <Typography variant="h2">
                  {sideDrawerData.itemData.title}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h2" align="right">
                  ${sideDrawerData.itemData.price}
                </Typography>
              </Box>
            </Box>

            {/* Variant Action Area */}
            <Box m={1}>
              <Divider />
            </Box>
            <Box display="flex" m={1}>
              <Fade in={true} timeout={2222}>
                <ButtonBase
                  style={{
                    background: "#2332de",
                    // backgroundColor: "#000000",
                    borderRadius: 6,
                    height: 28,
                    width: 28,
                    margin: 2,
                  }}
                />
              </Fade>
              <Fade in={true} timeout={4444}>
                <ButtonBase
                  style={{
                    background: "#d33434",
                    // backgroundColor: "#000000",
                    borderRadius: 6,
                    height: 28,
                    width: 28,
                    margin: 2,
                  }}
                />
              </Fade>
              <Fade in={true} timeout={6666}>
                <ButtonBase
                  style={{
                    background: "#324234",
                    // backgroundColor: "#000000",
                    borderRadius: 6,
                    height: 28,
                    width: 28,
                    margin: 2,
                  }}
                />
              </Fade>
            </Box>
            <Box m={1}>
              <Divider />
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
            <Box
              display="flex"
              flexDirection="row-reverse"
              m={1}
              justifyContent="space-around"
            >
              <Button variant="contained">Add to cart</Button>
              <Button
                variant="contained"
                onClick={() => {
                  closeDrawer();
                }}
              >
                Back
              </Button>
            </Box>
          </div>
        </Fade>
      </Box>
    </Box>
  );
};
