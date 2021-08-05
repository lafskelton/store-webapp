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
  Zoom,
} from "@material-ui/core";
import { ArrowLeftTwoTone, ArrowRightTwoTone } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { SideDrawerState } from "../../myTypes";
import CloseIcon from "@material-ui/icons/Close";
import { ItemContentProps } from "./drawer";

export const ItemContentDesktop = ({
  sideDrawerData,
  closeDrawer,
}: ItemContentProps) => {
  //Image Gallery Controller
  const [slideDir, setSlideDir] = useState<
    "right" | "left" | "up" | "down" | undefined
  >("right");
  const [slideIn, setSlideIn] = useState<boolean>(true);
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

  // useEffect(() => {
  //   console.log("effect");
  //   setTimeout(() => {
  //     setSlideIn(true);
  //   }, 250);
  // }, []);

  return (
    <>
      {/* <Box display="flex" flexDirection="row-reverse" m={1}>
        <Box flex m={1}>
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
      </Box> */}

      {/* Content */}
      <Box display="flex" flexDirection="row" height="100%">
        {/* Image Gallery */}
        <Box display="flex" m={1} width="60%">
          {/* desktop image gallery area */}

          {/* Desktop Rounded Image Box */}
          <Box
            display="flex"
            position="relative"
            flexGrow
            borderRadius={12}
            m={1}
            maxHeight="100%"
            maxWidth="100%"
            overflow="hidden"
            // bgcolor=""
            boxShadow={5}
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
                  {" "}
                  <ArrowRightTwoTone style={{ fontSize: 69, color: "black" }} />
                </IconButton>
              </Box>
            </Box>

            {/* Image Slider */}
            <Collapse
              in={slideIn}
              // direction={slideDir}
              timeout={{ enter: 100, appear: 2000, exit: 100 }}
              collapsedSize="0%"
              style={{ height: "100%" }}
            >
              <img
                src={sideDrawerData.itemData.galleryImgList[galleryPos].imgSrc}
                style={{ maxHeight: "100%", width: "auto" }}
              />
            </Collapse>
          </Box>
        </Box>

        {/* Content Area */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          m={1}
        >
          <Fade in={true} timeout={2222}>
            <div>
              {/* Item Title & Close */}
              <Box
                display="flex"
                flexDirection="row"
                m={1}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" m={1}>
                  <Typography variant="h2">
                    {sideDrawerData.itemData.title}
                  </Typography>
                </Box>
                {/* <Box display="flex" m={1}>
              <Typography variant="h5" align="right">
                ${sideDrawerData.itemData.price}
              </Typography>
            </Box> */}
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

              <Box m={1}>
                <Divider />
              </Box>

              {/* Variant Action Area */}
              <Box display="flex" m={1}>
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
                        height: 40,
                        width: 40,
                        margin: 3,
                      }}
                    />
                  </Zoom>
                ))}
              </Box>
              <Box m={1}>
                <Divider />
              </Box>
              {/* Description Area */}
              <Box display="flex" flexDirection="row" m={1}>
                <Typography variant="h5">
                  {sideDrawerData.itemData.galleryImgList[galleryPos].imgDesc}
                </Typography>
              </Box>
              {/* <Box height="100%" /> */}
              {/* Action Buttons */}
            </div>
          </Fade>
          <Box
            display="flex"
            flexDirection="row-reverse"
            m={1}
            width="100%"
            // justifyContent="space-around"
          >
            <Zoom in={true} timeout={{ appear: 3333, enter: 555, exit: 333 }}>
              <Button variant="contained">
                <Typography>Add to cart</Typography>
              </Button>
            </Zoom>

            {/* <Button
              variant="contained"
              onClick={() => {
                closeDrawer();
              }}
            >
              Back
            </Button> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};
