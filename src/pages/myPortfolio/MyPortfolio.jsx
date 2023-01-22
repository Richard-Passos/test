import { useEffect, useRef } from "react";
import Index from "../index/Index";
import Habilities from "../habilities/Habilities";
import About from "../about/About";
import Projects from "../projects/Projects";
import { addTouchEnd, addTouchStart } from "./touchMove";
import { switchArea, _changeArea } from "./switchArea";

export let carouselGlobal = "";
export let innerGLobal = "";

function MyPortfolio() {
  const carousel = useRef()
  const inner = useRef();
  useEffect(() => {
    carouselGlobal = carousel;
    innerGLobal = inner;
  }, [carousel, inner]);

  useEffect(() => {
    _changeArea(1)
    document.addEventListener("keydown", switchArea);

    document.addEventListener("touchstart", addTouchStart)
  }, [])

  useEffect(() => {
    document.removeEventListener("touchend", addTouchEnd);
    document.addEventListener("touchend", addTouchEnd);
  }, [inner]);


  return (
    <div ref={carousel} className="carousel">
      <div ref={inner} className="inner">
        <Projects />
        <div>
          <Index />
          <About />
        </div>
        <Habilities func={switchArea} />
      </div>
    </div>
  );
}

export default MyPortfolio;