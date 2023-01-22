import { carouselGlobal as carousel, innerGLobal as inner } from "./MyPortfolio"

export let area = "index";

export function _changeArea(timesNumberX, timesNumberY = 0) {
  inner.current.style.transform = `translateX(-${
    carousel.current?.offsetWidth * timesNumberX
  }px) 
    translateY(-${carousel.current?.offsetHeight * timesNumberY}px)`;
}

export function switchArea({ key }) {
  if (area === "index") {
    if (key === "ArrowRight" || key === "d") {
      _changeArea(2);
      area = "contact";
    } else if (key === "ArrowLeft" || key === "a") {
      _changeArea(0);
      area = "projects";
    } else if (key === "ArrowDown" || key === "s") {
      _changeArea(1, .5);
      area = "about";
    }
  } else if (area === "contact") {
    if (key === "ArrowLeft" || key === "a") {
      _changeArea(1);
      area = "index";
    }
  } else if (area === "about") {
    if (key === "ArrowUp" || key === "w") {
      _changeArea(1);
      area = "index";
    }
  } else if (area === "projects") {
    if (key === "ArrowRight" || key === "d") {
      _changeArea(1);
      area = "index";
    }
  }
}
