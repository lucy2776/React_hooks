import React from "react";
import ReactDOM from "react-dom/client";

// import HookUseState, { Page, AppUgly } from "./HookUseState"; // 한줄로 import 가능
// import { AppUgly } from './App';
// default없이 {} 식별 불가능(AppUgly->default x) => 객체의 이름을 임의로 설정x

// import HookUseInput from './HookUseInput';

// import HookUseTabs from './HookUseTabs.js';

// import HookUseEffect from './HookUseEffect.js';

// import HookUseTitle from './HookUseTitle.js';

// import HookUseClick from './HookUseClick.js';

// import HookUseConfirm, { HookUsePreventLeave } from './HookUseConfirmAndUsePreventLeave.js';

// import HookUseBeforeLeave from './HookUseBeforeLeave.js';

// import HookUseFadeIn, { HookUseNetwork } from './HookUseFadeInAndUseNetwork.js';

// import HookUseScroll, { HookUseFullscreen } from "./HookUseScrollAndUseFullscreen.js";

// import HookUseNotification from "./HookUseNotification.js";

import HookUseAxios from "./HookUseAxios.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <HookUseState />
    <Page />
    <AppUgly /> */}

    {/* <HookUseInput /> */}

    {/* <HookUseTabs /> */}

    {/* <HookUseEffect /> */}

    {/* <HookUseTitle /> */}

    {/* <HookUseClick /> */}

    {/* <HookUseConfirm />
    <HookUsePreventLeave /> */}

    {/* <HookUseBeforeLeave /> */}

    {/* <HookUseScroll />
    <HookUseFullscreen /> */}

    {/* <HookUseNotification /> */}

    <HookUseAxios />
  </div>
);
