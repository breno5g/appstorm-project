import React from "react";
import { storeWrapper } from "../store";

export const RenderWithRedux = (component: React.FC) => {
  return storeWrapper.withRedux(component);
};