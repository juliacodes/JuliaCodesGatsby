import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/loading";

const AppWrapper = ({ children }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 1300);
  });

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      {animated ? children : <Loading />}
    </>
  );
};

export { AppWrapper };
