import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Fade,
  IconButton,
  MenuItem,
  Select,
  Slide,
  Typography,
  useMediaQuery,
  Zoom,
} from "@material-ui/core";
import { CloseOutlined, DoneOutlineRounded } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { ItemVariant } from "../../myTypes";
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
  // setTimeout(() => {
  //   setSlideIn(true);
  // }, 500);

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
  const galleryController = (goLeft: boolean) => {
    if (goLeft) {
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
      }, 666);
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

  // ###### touch controllers

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  const onTouchStartCtrl = (event: React.TouchEvent<HTMLElement>) => {
    // console.log("start", "X:", touch.clientX, "Y:", touch.clientY);
    setTouchStartX(event.touches.item(0).clientX);
    setTouchStartY(event.touches.item(0).clientY);
  };

  const onTouchMoveCtrl = (event: React.TouchEvent<HTMLElement>) => {
    //Left
    if (event.touches.item(0).clientX + 100 < touchStartX) {
      console.log("swiped left");
      galleryController(true);
    }
    //right
    if (event.touches.item(0).clientX - 100 > touchStartX) {
      console.log("swiped right");
      galleryController(false);
    }
    //Left
    if (event.touches.item(0).clientY + 250 < touchStartY) {
      console.log("swiped up");
    }
    //right
    if (event.touches.item(0).clientY - 175 > touchStartY) {
      console.log("swiped down");
      closeDrawer();
    }
  };

  const onTouchEndCtrl = (
    event: React.TouchEventHandler<HTMLElement> | undefined
  ) => {};

  const isTall = useMediaQuery("(min-height: 600px)");

  // ### variant controllers
  const [variantList, setVariantList] = useState<ItemVariant[] | undefined>(
    undefined
  );
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const [selectedSize, setSelectedSize] = useState<
    "xsm" | "sml" | "med" | "lrg" | "xlg"
  >("med");

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
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      // maxHeight="100%"
      width="100%"
      onTouchStart={(touchStartEvent) => onTouchStartCtrl(touchStartEvent)}
      onTouchMove={(touchMoveEvent) => onTouchMoveCtrl(touchMoveEvent)}
      onTouchEnd={(e) => onTouchEndCtrl}
      // border={1}
      overflow="auto"
    >
      <Box display="flex" m={1} flexDirection="row-reverse">
        <IconButton onClick={() => closeDrawer()}>
          <CloseOutlined style={{ fontSize: 22, color: "#ffffff" }} />
        </IconButton>
      </Box>
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
            alt=""
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
          {/* Title/Price & Variant rows  */}
          <Box display="flex" flexDirection="column" m={1} width="100%">
            <Box
              display="flex"
              flexDirection="row"
              m={1}
              justifyContent="space-between"
            >
              <Box display="flex" m={1}>
                <Typography variant="h2" style={{ color: "#ffffff" }}>
                  {sideDrawerData.itemData.title}
                </Typography>
              </Box>
              <Box display="flex" m={1}>
                <Typography
                  variant="h2"
                  align="right"
                  style={{ color: "#ffffff" }}
                >
                  ${sideDrawerData.itemData.price}
                </Typography>
              </Box>
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
                          style={{
                            //Change manifest array to map with pointer index to related image
                            background: v.buttonColor,
                            borderRadius: 12,
                            height: 40,
                            width: 40,
                            margin: 3,
                            opacity: v.selected ? 0.5 : 1,
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
                <Box display="flex" m={1} width="25%">
                  <Select
                    labelId="drawer-select-label"
                    id="drawer-simple-select"
                    value={selectedSize}
                    onChange={(e) => {
                      setSelectedSize(
                        e.target.value as "xsm" | "sml" | "med" | "lrg" | "xlg"
                      );
                    }}
                    fullWidth
                    MenuProps={{
                      MenuListProps: {
                        style: {
                          backdropFilter: "blur(6px)",
                        },
                      },
                    }}
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
          </Box>

          {/* Description Area */}
          <Box display="flex" m={2} overflow="hidden">
            <Fade
              in={loaded}
              timeout={{
                appear: 666,
                enter: 666,
                exit: 666,
              }}
            >
              <Typography variant="subtitle1" align="center">
                {sideDrawerData.itemData.galleryImgList[galleryPos].imgDesc}
              </Typography>
            </Fade>
          </Box>

          {/* Action Buttons */}
          <Box display="flex" m={1}>
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
                      // shoppingCart.includes(sideDrawerData.itemData.item)
                      //   ? removeItemFromCart(sideDrawerData.itemData)
                      //   : addItemToCart(sideDrawerData.itemData);

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
                    // style={{ margin: 10 }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        fontSize: 18,
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
                <br />
                <br />
              </Box>
            </Slide>
          </Box>
          <Box display="flex" height={isTall ? 55 : 35}></Box>
        </Box>
      </Fade>
    </Box>
  );
};
