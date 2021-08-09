import {
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  InputBase,
  MenuItem,
  NativeSelect,
  Select,
  Slide,
  Typography,
  Zoom,
} from "@material-ui/core";
import {
  ArrowLeftTwoTone,
  ArrowRightTwoTone,
  DoneOutlineRounded,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Close";
import { ItemContentProps } from "./drawer";
import { useMediaQuery } from "@material-ui/core";
import { ItemVariant } from "../../myTypes";

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

  let isWideScreen = useMediaQuery("(min-width:1200px)");

  const goToImage = (n: number) => {
    //Slide out to the right
    setSlideDir("right");
    setSlideIn(false);
    setTimeout(() => {
      setSlideDir("left");

      setGalleryPos(n);

      setTimeout(() => {
        setSlideIn(true);
      }, 250);
    }, 666);
  };

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

        if (galleryPos + 1 >= sideDrawerData.itemData.galleryImgList.length) {
          setGalleryPos(0);
        } else {
          setGalleryPos(galleryPos + 1);
        }

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

        if (galleryPos - 1 < 0) {
          setGalleryPos(sideDrawerData.itemData.galleryImgList.length - 1);
        } else {
          setGalleryPos(galleryPos - 1);
        }

        setTimeout(() => {
          setSlideIn(true);
        }, 250);
      }, 555);
    }
  };

  const [variantList, setVariantList] = useState<ItemVariant[] | undefined>(
    undefined
  );
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const [selectedSize, setSelectedSize] = useState<
    "xsm" | "sm" | "md" | "lg" | "xlg"
  >("md");

  const selectVariant = (n: number) => {
    setSelectedVariant(n);
    if (variantList) {
      let newVariantList = [...variantList];
      for (let i = 0; i < newVariantList.length; i++) {
        newVariantList[i].selected = i == n;
      }
      setVariantList(newVariantList);
    }

    goToImage(n);
  };

  useEffect(() => {
    setVariantList(sideDrawerData.itemData.variants);
  }, [sideDrawerData]);

  return (
    // Item Content
    <Box
      display="flex"
      flexDirection="row"
      // height="100%"
      borderRadius={6}
      // border={1}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={1}
        // border={1}
        // width="100%"
        maxWidth={isWideScreen ? 1200 : "100%"}
      >
        {/* Desktop Rounded Image Box */}
        <Box
          display="flex"
          position="relative"
          borderRadius={12}
          overflow="hidden"
          boxShadow={2}
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
                <ArrowLeftTwoTone
                  style={{
                    fontSize: 69,
                    color: "white",
                  }}
                />
              </IconButton>
            </Box>
            <Box display="flex" flexGrow={1} height="100%" width="100%"></Box>
            <Box display="flex" flexGrow={1} height="100%">
              <IconButton
                style={{ height: "100%" }}
                onClick={(e) => galleryController(e, false)}
              >
                <ArrowRightTwoTone style={{ fontSize: 69, color: "white" }} />
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
              alt=""
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
        maxWidth="40%"
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
              <Box
                display="flex"
                m={1}
                width="95%"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box display="flex" m={1}>
                  {variantList ? (
                    variantList.map((v, i) => (
                      <Zoom
                        in={true}
                        timeout={{ appear: 2222, enter: 1000, exit: 333 }}
                      >
                        <IconButton
                          disabled={
                            shoppingCart.find(
                              (cartItem) =>
                                cartItem.item.id === sideDrawerData.itemData.id
                            ) !== undefined
                          }
                          style={{
                            //Change manifest array to map with pointer index to related image
                            background: v.buttonColor,
                            borderRadius: 12,
                            height: 40,
                            width: 40,
                            margin: 3,
                            opacity:
                              v.selected ||
                              shoppingCart.find(
                                (cartItem) =>
                                  cartItem.item.id ===
                                  sideDrawerData.itemData.id
                              ) !== undefined
                                ? 0.5
                                : 1,
                          }}
                          onClick={() => {
                            selectVariant(i);
                          }}
                        >
                          {v.selected ? <DoneOutlineRounded /> : <></>}
                        </IconButton>
                      </Zoom>
                    ))
                  ) : (
                    <></>
                  )}
                </Box>
                <Box display="flex" m={1} flexGrow={1} maxWidth="30%">
                  <Select
                    // labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedSize}
                    onChange={(e) => {
                      setSelectedSize(
                        e.target.value as "xsm" | "sm" | "md" | "lg" | "xlg"
                      );
                    }}
                    fullWidth
                    style={{ borderRadius: 6 }}
                    MenuProps={{
                      MenuListProps: {
                        style: {
                          backdropFilter: "blur(6px)",
                        },
                      },
                    }}
                    input={
                      <InputBase
                        disabled={
                          shoppingCart.find(
                            (cartItem) =>
                              cartItem.item.id === sideDrawerData.itemData.id
                          ) !== undefined
                        }
                        style={{
                          borderRadius: 4,
                          position: "relative",
                          // backgroundColor: "#000000",
                          border: "1px solid #ced4da",
                          fontSize: 16,
                          padding: "10px 26px 10px 12px",
                        }}
                      />
                    }
                  >
                    <MenuItem
                      value={"xsm"}
                      style={{ backdropFilter: "blur(6px)" }}
                    >
                      X-Small
                    </MenuItem>
                    <MenuItem value={"sm"}>Small</MenuItem>
                    <MenuItem value={"md"}>Medium</MenuItem>
                    <MenuItem value={"lg"}>Large</MenuItem>
                    <MenuItem value={"xlg"}>X-Large</MenuItem>
                  </Select>
                </Box>
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
                        shoppingCart.find(
                          (cartItem) =>
                            cartItem.item.id === sideDrawerData.itemData.id
                        )
                          ? removeItemFromCart(sideDrawerData.itemData)
                          : addItemToCart(
                              sideDrawerData.itemData,
                              selectedVariant,
                              selectedSize,
                              0
                            );
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        style={{
                          fontSize: 22,
                          color: "#ffffff",
                        }}
                      >
                        {shoppingCart.find(
                          (cartItem) =>
                            cartItem.item.id === sideDrawerData.itemData.id
                        )
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
