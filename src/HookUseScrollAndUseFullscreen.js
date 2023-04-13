import { useEffect, useRef, useState } from "react";
import bgImg from "./img/1.jpg";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    console.log("x: ", window.scrollX, "y: ", window.scrollY);
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return state;
};

const HookUseScroll = () => {
  // 스크롤 감지
  const { y } = useScroll();

  return (
    <div style={{ height: "1000vh", backgroundImage: `url(${bgImg})` }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
    // 1vw = 뷰포트 너비의 1%
    // 1vh = 뷰포트 높이의 1%
  );
};

export default HookUseScroll;

//
// =====================
//

// f11 하면 되지않음 ?
const useFullscreen = (onFullScreen) => {
  const element = useRef();
  const runCB = (isFull) => {
    if (onFullScreen && typeof onFullScreen === "function") {
      onFullScreen(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      }
      runCB(true);
    }
  };

  const exitFull = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      runCB(false);
    }
  };

  return { element, triggerFull, exitFull };
};

export const HookUseFullscreen = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "full" : "small");
  };

  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);

  return (
    <div ref={element}>
      {/* 이미지 자체에 주면 전체 화면 시 버튼이 보이지 않음 -> 상위 div요소에 주어 버튼 표시 */}
      <img
        src={bgImg}
        alt="#"
        style={{ width: "50%", height: "50%", objectFit: "contain" }}
      ></img>
      <div>
        <button onClick={triggerFull}>Make fullscreen</button>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
    </div>
  );
};
