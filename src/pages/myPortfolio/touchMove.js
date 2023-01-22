import { area, switchArea } from "./switchArea";

const isTouchMove = {
  touchSX: 0 /* touchStartX */,
  touchEX: 0 /* touchEndX */,
  touchSY: 0 /* touchStartY */,
  touchEY: 0 /* touchEndY */,
};
const touchM = isTouchMove

export function addTouchStart(e) {
  touchM.touchSX = e.touches[0].pageX;
  touchM.touchSY = e.touches[0].pageY;
}

export function addTouchEnd(e) {
  touchM.touchEX = e.changedTouches[0].pageX;
  touchM.touchEY = e.changedTouches[0].pageY;

  if (touchM.touchEY < touchM.touchSY / 1.2 && area === "index") {
    switchArea({ key: "ArrowDown" });
  } else if (touchM.touchEY > touchM.touchSY * 1.2 && area === "about") {
    switchArea({ key: "ArrowUp" });
  } else {
    if (touchM.touchSX > touchM.touchEX * 2) {
      switchArea({ key: "ArrowRight" });
    } else if (touchM.touchSX < touchM.touchEX / 2) {
      switchArea({ key: "ArrowLeft" });
    }
  }
}