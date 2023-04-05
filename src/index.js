import React from "react";
import ReactDOM from "react-dom/client";

import HookUseState, { Page, AppUgly } from "./HookUseState"; // 한줄로 import 가능
// import { AppUgly } from './App';
// default없이 {} 식별 불가능(AppUgly->default x) => 객체의 이름을 임의로 설정x

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <HookUseState />
    <Page />
    <AppUgly />
  </div>
);
