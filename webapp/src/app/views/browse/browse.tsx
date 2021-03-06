import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Slide } from "@material-ui/core";
import {
  BrowseManifest,
  ItemData,
  RowType,
  ShoppingCartItem,
} from "../../myTypes";
import "./browse.css";
import {
  FullSectionRow,
  DoubleSectionRow,
  SingleSectionRow,
  SectionTitleRow,
} from "./itemSection";
import { useEffect } from "react";
import { getBrowseManifest } from "./api/getManifest";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    maxWidth: 666,
  },
});

interface BrowseProps {
  show: boolean;
  exiting: boolean;
  openSideDrawer: Function;
  setManifest: Function;
  manifest: BrowseManifest | undefined;
  shoppingCart: ShoppingCartItem[];
}

export default function Browse({
  show,
  exiting,
  openSideDrawer,
  manifest,
  setManifest,
  shoppingCart,
}: BrowseProps) {
  const classes = useStyles();

  // const div = useRef(null);

  // function loadRowAnimationController(m: BrowseManifest) {
  //   //   ReactDOM.createPortal(<p>hello</p>, browseDiv);
  //   // let browseDiv = document.getElementById("browseDiv");
  //   // browseDiv?.append(<>hello</>);

  // }
  const [loaded, setLoaded] = useState<boolean>(false);
  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [elems, setElems] = useState<JSX.Element>(<></>);

  useEffect(() => {
    setSlideIn(loaded ? show : false);
  }, [show, loaded]);

  useEffect(() => {
    if (!show || !loaded || !exiting) return;
    setSlideIn(false);
  }, [exiting]);

  useEffect(() => {
    if (slideIn) {
      setTimeout(() => {
        console.log();
      }, 1000);
    }
  }, [slideIn]);

  useEffect(() => {
    if (!manifest) return;
    let offset: number = 500;
    console.log("loaded");
    setElems(
      manifest ? (
        <div>
          {manifest.rows.map((row, i) => {
            console.log("running");
            switch (row.rowType) {
              case RowType.sectionTitle:
                // console.log(row);
                return <SectionTitleRow title={row.items[0].title} />;
              case RowType.full:
                // console.log(row);
                return (
                  <FullSectionRow
                    rowId={row.rowId}
                    sectionId={row.sectionId}
                    key={`section_${row.sectionId}_fullrow_${row.rowId}`}
                    itemData={row.items[0]}
                    openSideDrawer={openSideDrawer}
                    animationDelay={manifest.rows.length * offset - offset * i}
                  />
                );
              case RowType.double:
                // console.log("row", row);
                return (
                  <DoubleSectionRow
                    key={`section_${row.sectionId}_doublerow_${row.rowId}`}
                    sectionId={row.sectionId}
                    rowId={row.rowId}
                    leftItemData={row.items[0]}
                    rightItemData={row.items[1]}
                    openSideDrawer={openSideDrawer}
                    animationDelay={manifest.rows.length * offset - offset * i}
                  />
                );
              case RowType.single:
                // console.log("row", row);
                return (
                  <SingleSectionRow
                    key={`section_${row.sectionId}_singlerow_${row.rowId}`}
                    itemData={row.items[0]}
                    sectionId={row.sectionId}
                    rowId={row.rowId}
                    openSideDrawer={openSideDrawer}
                  />
                );

              default:
                // console.log("row", row);
                return (
                  <SingleSectionRow
                    key={`section_${row.sectionId}_singlerow_${row.rowId}`}
                    itemData={row.items[0]}
                    sectionId={row.sectionId}
                    rowId={row.rowId}
                    openSideDrawer={openSideDrawer}
                  />
                );
            }
          })}
        </div>
      ) : (
        <></>
      )
    );
    setLoaded(true);
  }, [manifest]);

  return (
    <Box className={classes.root}>
      <Slide
        in={slideIn}
        direction="up"
        timeout={{ enter: 2222, appear: 1111, exit: 300 }}
        // mountOnEnter
        // unmountOnExit
      >
        <div>{elems}</div>
      </Slide>
      {/* Section One Title */}
      {/* {browseDiv} */}
      {/* <div ref={div} id={"browseDiv"}></div> */}

      {/* Extra room to accomodate overflow   */}
      <Box height={66}></Box>
    </Box>
  );
}

// NOTE:
// THIS IS FOR DEBUGGING SINCE A FULLSCALE VITESS DATABASE WILL NOT BE DEPLOYED FOR DEMO.
// i would never do something like this in production!!!!!!!!!
//
export const loadBrowseManifest = async (): Promise<BrowseManifest> => {
  getBrowseManifest().then((res) => {
    console.log("server manifest", res);
  });
  let x = new Promise<BrowseManifest>((res) => {
    setTimeout(() => {
      res({
        rows: [
          {
            sectionId: 0,
            rowId: 0,
            rowType: RowType.sectionTitle,
            numItems: 1,
            items: [
              {
                sectionId: 0,
                rowId: 0,
                rowType: RowType.sectionTitle,
                id: "",
                title: "Random",
                price: 0,
                tileImg: "",
                variants: [],
                galleryImgList: [{ imgSrc: "", imgDesc: "" }],
                selectedSize: "md",
              },
            ],
          },
          {
            sectionId: 0,
            rowId: 0,
            rowType: RowType.full,
            numItems: 1,
            items: [
              {
                sectionId: 0,
                rowId: 0,
                rowType: RowType.full,
                id: "123dfdsfsdfsdf4",
                title: "Item #1",
                price: 59,
                tileImg: "/assets/images/shirt.jpg",
                // variantColors: ["#324234", "#d33434", "#2332de"],
                variants: [
                  {
                    buttonColor: "#324234",
                    assocGalleryImg: 0,
                    selected: false,
                  },
                  {
                    buttonColor: "#d33434",
                    assocGalleryImg: 2,
                    selected: false,
                  },
                  {
                    buttonColor: "#2332de",
                    assocGalleryImg: 1,
                    selected: false,
                  },
                ],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/shirt.jpg",
                    imgDesc:
                      "This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                ],
                selectedSize: "md",
              },
            ],
          },
          {
            sectionId: 0,
            rowId: 1,
            rowType: RowType.double,
            numItems: 2,
            items: [
              {
                sectionId: 0,
                rowId: 1,
                rowType: RowType.double,
                id: "7b32e09c-297bd-4476-a1b0-6e640357d29f",
                title: "Item #2",
                price: 39,
                tileImg: "/assets/images/pants.jpg",
                variants: [
                  {
                    buttonColor: "#324234",
                    assocGalleryImg: 0,
                    selected: false,
                  },
                  {
                    buttonColor: "#2332de",
                    assocGalleryImg: 1,
                    selected: false,
                  },
                  {
                    buttonColor: "#d33434",
                    assocGalleryImg: 2,
                    selected: false,
                  },
                ],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/shirt.jpg",
                    imgDesc:
                      "3This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                ],
                selectedSize: "md",
              },
              {
                sectionId: 0,
                rowId: 1,
                rowType: RowType.double,
                id: "7b32e0-297b-4476-a1b0-6e640357d29f",
                title: "Item #3",
                price: 13,
                tileImg: "/assets/images/sweater.jpg",
                variants: [
                  {
                    buttonColor: "#324234",
                    assocGalleryImg: 0,
                    selected: false,
                  },
                  {
                    buttonColor: "#2332de",
                    assocGalleryImg: 1,
                    selected: false,
                  },
                  {
                    buttonColor: "#d33434",
                    assocGalleryImg: 2,
                    selected: false,
                  },
                ],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/shirt.jpg",
                    imgDesc:
                      "2This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "3This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                ],
                selectedSize: "md",
              },
            ],
          },
          {
            sectionId: 0,
            rowId: 2,
            rowType: RowType.double,
            numItems: 2,
            items: [
              {
                sectionId: 0,
                rowId: 2,
                rowType: RowType.double,
                id: "7b32e09c-297b-4476-a1-6e640357d29f",
                title: "Item #4",
                price: 37,
                tileImg: "/assets/images/shirt.jpg",
                variants: [
                  {
                    buttonColor: "#324234",
                    assocGalleryImg: 0,
                    selected: false,
                  },
                  {
                    buttonColor: "#2332de",
                    assocGalleryImg: 1,
                    selected: false,
                  },
                  {
                    buttonColor: "#d33434",
                    assocGalleryImg: 2,
                    selected: false,
                  },
                ],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "1This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/shirt.jpg",
                    imgDesc:
                      "2This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "3This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                ],
                selectedSize: "md",
              },
              {
                sectionId: 0,
                rowId: 2,
                rowType: RowType.double,
                id: "7b32e09c-297b-4476-a0-6e640357d29f",
                title: "Item #5",
                price: 69,
                tileImg: "/assets/images/1.jpg",
                variants: [
                  {
                    buttonColor: "#324234",
                    assocGalleryImg: 0,
                    selected: false,
                  },
                  {
                    buttonColor: "#2332de",
                    assocGalleryImg: 1,
                    selected: false,
                  },
                ],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/shirt.jpg",
                    imgDesc:
                      "3This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                ],
                selectedSize: "md",
              },
            ],
          },
          {
            sectionId: 0,
            rowId: 3,
            rowType: RowType.full,
            numItems: 1,
            items: [
              {
                sectionId: 0,
                rowId: 3,
                rowType: RowType.full,
                id: "1234",
                title: "Item #6",
                price: 21,
                tileImg: "/assets/images/shirt.jpg",
                variants: [
                  {
                    buttonColor: "#324234",
                    assocGalleryImg: 0,
                    selected: false,
                  },
                ],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/shirt.jpg",
                    imgDesc:
                      "1This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "2This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "3This shirt, while it may look like it is similar to our other shirts. Is actually located at a different place in our database. Take action, buy next week!",
                  },
                ],
                selectedSize: "md",
              },
            ],
          },
        ],
      });
    }, 1000); // Simulated 5 sec response time :(
  });
  return x;
};
