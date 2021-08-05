import { useState, useEffect, TouchEvent } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useDebounceCallback } from "@react-hook/debounce";

import { Box, Slide } from "@material-ui/core";
import {
  ArrowBackIosTwoTone,
  ArrowForwardIosTwoTone,
} from "@material-ui/icons";

interface ImageControlOverlayProps {
  galleryHeight: number;
  next: Function;
  back: Function;
}

function ImageControlOverlay({
  galleryHeight,
  next,
  back,
}: ImageControlOverlayProps) {
  const [dragX, setDragX] = useState(0);
  const [startTime, setStartTime] = useState<Date>(new Date());
  //Touch handlers
  const touchStart = (e: TouchEvent<HTMLElement>) => {
    const startDragX = e.changedTouches[0].clientX;
    setStartTime(new Date());
    // console.log(startDragX);
    setDragX(startDragX);
  };
  const touchMove = (e: TouchEvent<HTMLElement>) => {};
  const touchEnd = (e: TouchEvent<HTMLElement>) => {
    const endDragX = e.changedTouches[0].clientX;
    const endTime = new Date();
    var timeDiff = endTime.getMilliseconds() - startTime.getMilliseconds(); //in ms

    if (Math.abs(timeDiff) > 100) {
      if (dragX - endDragX > 100) {
        console.log("left swipe");

        next();
      }
      if (dragX - endDragX < 100) {
        console.log("right swipe");
        back();
      }
    }

    // setTimeout(() => {
    //   setPositionX(0);
    // }, 500);
  };

  let isMobile: boolean = !useMediaQuery("(min-width:641px)");

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexGrow={1}
      m={"auto"}
      position="absolute"
      width="100%"
      // zIndex="tooltip"
      height={galleryHeight}
      onTouchMove={isMobile ? touchMove : () => {}}
      onTouchStart={isMobile ? touchStart : () => {}}
      onTouchEnd={isMobile ? touchEnd : () => {}}
    >
      {isMobile ? (
        <></>
      ) : (
        <>
          <Box
            height="100%"
            width="20%"
            onClick={() => {
              back();
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              flexGrow={1}
              height={"100%"}
            >
              <Box
                // height="100%"
                // width="100%"
                // position="relative"
                // top="50%"
                // left="50%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <ArrowBackIosTwoTone />
              </Box>
            </Box>
          </Box>
          <Box height="100%" width="60%"></Box>
          <Box
            height="100%"
            width="20%"
            onClick={() => {
              next();
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              flexGrow={1}
              justifyContent="space-around"
              height={"100%"}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <ArrowForwardIosTwoTone />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

interface ImageGalleryProps {
  closing: boolean; // on effect, this will become true and slideIn is set to false
}

export default function ImageGallery({ closing }: ImageGalleryProps) {
  //
  const galleryHeight: number = useMediaQuery("(min-width:666px)") ? 300 : 255;

  //Image slide control state
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | "up" | "down" | undefined
  >("left");
  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [itemImageList, setItemImageList] = useState<Array<string>>([
    "/assets/images/mockup.jpg",
    "/assets/images/mockup2.jpg",
    "/assets/images/mockup.jpg",
    "/assets/images/mockup2.jpg",
  ]);
  const [imageListPos, setImageListPos] = useState<number>(0);

  //Onload, wait 250 ms then slide in pos 0
  useEffect(() => {
    setTimeout(() => {
      setSlideDirection("left");
      setSlideIn(true);
    }, 666);
  }, []);

  //On close, slideOut gallery
  useEffect(() => {
    if (closing) {
      setSlideDirection("right");
      setSlideIn(false);
    }
  }, [closing]);

  const [imageSource, setImageSource] = useState<string>(
    "/assets/images/mockup.jpg"
  );

  // var imageElements: Array<JSX.Element> = [];
  // images.forEach((src) => {
  //   imageElements.push(<img src={src} style={{ width: "auto" }}></img>);
  // });
  // Three slide divs
  // prev current next
  //
  // if moving to prev.
  //    current direction set to right, and in set to false
  //    prev direction set to left, and in set to true
  // if moving to next.
  //    current direction set to left, and in set to false
  //    next direction set to right, and in set to true

  const loadImage = async (pos: number) => {
    setImageSource(itemImageList[(imageListPos + pos) % itemImageList.length]);
    setImageListPos(imageListPos + pos);
    await new Promise((resolve) => setTimeout(resolve, 250));
    return;
  };

  const gotoNext = useDebounceCallback(() => {
    console.log("hello");

    //Slide out to the left
    setSlideDirection("right");
    setSlideIn(false);
    setTimeout(() => {
      loadImage(1).then(() => {
        setSlideDirection("left");
        setSlideIn(true);
      });
    }, 300);
  }, 250);

  const gotoPrev = useDebounceCallback(() => {
    //Slide out to the left
    setSlideDirection("left");
    setSlideIn(false);
    setTimeout(() => {
      loadImage(-1).then(() => {
        setSlideDirection("right");
        setSlideIn(true);
      });
    }, 300);
  }, 250);

  return (
    <>
      <Box
        // display="flex"
        // flexDirection="row"
        // flexGrow={1}
        // border={1}
        borderRadius={22}
        // overflow="hidden"
        // style={{ zIndex: 1001 }}
        height={galleryHeight}
        // width="100%"
      >
        <Box m={"auto"}>
          <ImageControlOverlay
            galleryHeight={galleryHeight}
            next={gotoNext}
            back={gotoPrev}
          />
        </Box>

        <Slide direction={slideDirection} in={slideIn}>
          <Box
            borderRadius={22}
            overflow="hidden"
            display="flex"
            // flexGrow={1}
            m={1}
            justifyContent={"space-around"}
            maxWidth={"100%"}
            maxHeight={"95%"}
            // width="auto"
            // height="auto"
          >
            <img src={imageSource} style={{ width: "auto" }} alt=""></img>
          </Box>
        </Slide>
      </Box>
    </>
  );
}
