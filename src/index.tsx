import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from 'react';
import { Spin } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Suspense fallback={<Spin />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
