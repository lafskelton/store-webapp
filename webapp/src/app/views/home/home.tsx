import { useState } from "react";
import { Box } from "@material-ui/core";
import { useEffect } from "react";
import Logo from "./logo";
import AboutUs from "./aboutus";

interface HomeProps {
  show: boolean;
  exiting: boolean;
}

export default function Home({ show, exiting }: HomeProps) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTitleTimer(true);
  //   }, 1666);
  // }, []);
  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<"logo" | "about">("logo");

  useEffect(() => {
    setSlideIn(show);
  }, [show]);
  useEffect(() => {
    setSlideIn(!exiting);
  }, [exiting]);

  const changeView = (v: "logo" | "about") => {
    //Slide out animation
    setSlideIn(false);
    //Change after out
    setTimeout(() => {
      setCurrentView(v);
      //Slide Back in
      setTimeout(() => {
        setSlideIn(true);
      }, 100);
    }, 888);
  };

  return (
    <Box
      // m={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      overflow="hidden"
    >
      <div style={{ display: currentView === "logo" ? "contents" : "none" }}>
        <Logo slideIn={slideIn} changeView={changeView} />
      </div>
      <div style={{ display: currentView === "about" ? "contents" : "none" }}>
        <AboutUs slideIn={slideIn} changeView={changeView} />
      </div>
    </Box>
  );
}
