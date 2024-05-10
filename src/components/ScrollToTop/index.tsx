import { useLocation } from "react-router-dom";
import { useEffect } from "react";



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 0)
  }, [pathname])

  return null;
}

export default ScrollToTop;