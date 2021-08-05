import { useRef, useState, Ref } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Collapse,
  Fade,
  Divider,
  Slide,
  Typography,
} from "@material-ui/core";
import {
  BrowseManifest,
  ItemData,
  RowData,
  RowType,
  SideDrawerState,
} from "./../../myTypes";
import "./browse.css";
import {
  FullSectionRow,
  DoubleSectionRow,
  SingleSectionRow,
  SectionTitleRow,
} from "./itemSection";
import { v4 } from "uuid";
import { useEffect } from "react";
import { createRef } from "react";

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

//Retreive item manifest from server based on user fingerprint
export const loadBrowseManifest = async (): Promise<BrowseManifest> => {
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
                variantColors: [""],
                galleryImgList: [{ imgSrc: "", imgDesc: "" }],
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
                id: "1234",
                title: "Shit #1",
                price: 59,
                tileImg: "/assets/images/shirt.jpg",
                variantColors: ["#324234", "#d33434", "#2332de"],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
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
                title: "Shit #2",
                price: 39,
                tileImg: "/assets/images/pants.jpg",
                variantColors: ["#324234", "#d33434", "#2332de"],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
              },
              {
                sectionId: 0,
                rowId: 1,
                rowType: RowType.double,
                id: "7b32e0-297b-4476-a1b0-6e640357d29f",
                title: "Shit #3",
                price: 13,
                tileImg: "/assets/images/sweater.jpg",
                variantColors: ["#324234", "#d33434", "#2332de"],

                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
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
                title: "Shit #4",
                price: 37,
                tileImg: "/assets/images/shirt.jpg",
                variantColors: ["#324234", "#d33434", "#2332de"],

                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
              },
              {
                sectionId: 0,
                rowId: 2,
                rowType: RowType.double,
                id: "7b32e09c-297b-4476-a0-6e640357d29f",
                title: "Shit #5",
                price: 69,
                tileImg: "/assets/images/1.jpg",
                variantColors: ["#324234", "#2332de"],

                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
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
                title: "Shit #6",
                price: 21,
                tileImg: "/assets/images/mockup2.jpg",
                variantColors: ["#324234"],

                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
              },
            ],
          },
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
                variantColors: [""],
                galleryImgList: [{ imgSrc: "", imgDesc: "" }],
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
                id: "1234",
                title: "Shit #1",
                price: 59,
                tileImg: "/assets/images/shirt.jpg",
                variantColors: ["#324234", "#d33434", "#2332de"],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
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
                title: "Shit #2",
                price: 39,
                tileImg: "/assets/images/pants.jpg",
                variantColors: ["#324234", "#d33434", "#2332de"],
                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
              },
              {
                sectionId: 0,
                rowId: 1,
                rowType: RowType.double,
                id: "7b32e0-297b-4476-a1b0-6e640357d29f",
                title: "Shit #3",
                price: 13,
                tileImg: "/assets/images/sweater.jpg",
                variantColors: ["#324234", "#d33434", "#2332de"],

                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
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
                title: "Shit #4",
                price: 37,
                tileImg: "/assets/images/shirt.jpg",
                variantColors: ["#324234", "#d33434", "#2332de"],

                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
              },
              {
                sectionId: 0,
                rowId: 2,
                rowType: RowType.double,
                id: "7b32e09c-297b-4476-a0-6e640357d29f",
                title: "Shit #5",
                price: 69,
                tileImg: "/assets/images/1.jpg",
                variantColors: ["#324234", "#2332de"],

                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
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
                title: "Shit #6",
                price: 21,
                tileImg: "/assets/images/mockup2.jpg",
                variantColors: ["#324234"],

                galleryImgList: [
                  {
                    imgSrc: "/assets/images/sweater.jpg",
                    imgDesc:
                      "1You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/1.jpg",
                    imgDesc:
                      "2You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                  {
                    imgSrc: "/assets/images/mockup2.jpg",
                    imgDesc:
                      "3You probably shouldn't buy this, but hopefully it will invoke a temporary sense of 'joy' for you, and we would be very happy to provide that :) I want a boat!",
                  },
                ],
              },
            ],
          },
        ],
      });
    }, 1000); // Simulated 5 sec response time :(
  });
  return x;
};

interface BrowseProps {
  show: boolean;
  exiting: boolean;
  openSideDrawer: Function;
  setManifest: Function;
  manifest: BrowseManifest | undefined;
  shoppingCart: ItemData[];
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
  const [fadeTilesIn, setFadeTilesIn] = useState<boolean>(false);
  const [elems, setElems] = useState<JSX.Element>(<></>);

  useEffect(() => {
    setSlideIn(loaded ? show : false);
  }, [show, loaded]);

  useEffect(() => {
    if (!show || !loaded || !exiting) return;
    setSlideIn(false);
    setFadeTilesIn(false);
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
      <>
        {manifest ? (
          manifest.rows.map((row, i) => {
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
            }
          })
        ) : (
          <></>
        )}
      </>
    );
    setLoaded(true);
  }, [manifest]);

  return (
    <Box className={classes.root}>
      <Slide
        in={slideIn}
        direction="up"
        timeout={{ enter: 1200, appear: 200, exit: 300 }}
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

// {manifest !== undefined ? (
//   <>
//     {/* Iterate over sections and construct them */}
//     {manifest.rows.map((row) => {
//       // <Section
//       //   key={`section_${section.sectionId}`}
//       //   sectionData={section}
//       //   openSideDrawer={openSideDrawer}
//       //   sectionRefKey={v4()}
//       // />
//       switch (row.rowType) {
//         case RowType.sectionTitle:
//           console.log(row);
//           return <SectionTitleRow title={row.items[0].title} />;
//         case RowType.full:
//           console.log(row);
//           return (
//             <FullSectionRow
//               rowId={row.rowId}
//               sectionId={row.sectionId}
//               key={`section_${row.sectionId}_fullrow_${row.rowId}`}
//               itemData={row.items[0]}
//               openSideDrawer={openSideDrawer}
//             />
//           );
//         case RowType.double:
//           console.log("row", row);
//           return (
//             <DoubleSectionRow
//               key={`section_${row.sectionId}_doublerow_${row.rowId}`}
//               sectionId={row.sectionId}
//               rowId={row.rowId}
//               leftItemData={row.items[0]}
//               rightItemData={row.items[1]}
//               openSideDrawer={openSideDrawer}
//             />
//           );
//         case RowType.single:
//           console.log("row", row);

//           return (
//             <SingleSectionRow
//               key={`section_${row.sectionId}_singlerow_${row.rowId}`}
//               itemData={row.items[0]}
//               sectionId={row.sectionId}
//               rowId={row.rowId}
//               openSideDrawer={openSideDrawer}
//             />
//           );
//       }
//     })}
//   </>
// ) : (
//   <h1>loading</h1>
// )}
// return (
//   <Box className={classes.root}>
//     {manifest !== undefined ? (
//       <>
//         {/* Iterate over sections and construct them */}
//         {manifest.browseMap.map((section) => (
//           <Section key={`section_${section.sectionId}`} sectionData={section}>
//             <>
//               {/* Render out browse map by row type */}
//               {section.rows.map((row, i) => {
//                 switch (row.rowType) {
//                   case RowType.full:
//                     console.log(row);
//                     return (
//                       <FullSectionRow
//                         rowId={row.rowId}
//                         sectionId={row.sectionId}
//                         key={`section_${section.sectionId}_fullrow_${row.rowId}`}
//                         itemData={row.items[0]}
//                         openSideDrawer={openSideDrawer}
//                       />
//                     );
//                   case RowType.double:
//                     console.log("row", row);
//                     return (
//                       <DoubleSectionRow
//                         key={`section_${section.sectionId}_doublerow_${row.rowId}`}
//                         sectionId={row.sectionId}
//                         rowId={row.rowId}
//                         leftItemData={row.items[0]}
//                         rightItemData={row.items[1]}
//                         openSideDrawer={openSideDrawer}
//                       />
//                     );
//                   case RowType.single:
//                     console.log("row", row);

//                     return (
//                       <SingleSectionRow
//                         key={`section_${section.sectionId}_singlerow_${row.rowId}`}
//                         itemData={row.items[0]}
//                         sectionId={row.sectionId}
//                         rowId={row.rowId}
//                         openSideDrawer={openSideDrawer}
//                       />
//                     );
//                 }
//               })}
//             </>
//           </Section>
//         ))}
//       </>
//     ) : (
//       <h1>loading</h1>
//     )}

//     {/* Section One Title */}

//     {/* Extra room to accomodate overflow   */}
//     <Box height={66}></Box>
//   </Box>
// );
