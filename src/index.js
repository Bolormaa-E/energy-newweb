import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";
import mnMN from "antd/es/locale/mn_MN";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={mnMN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
