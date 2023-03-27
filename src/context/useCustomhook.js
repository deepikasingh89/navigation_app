import React from "react";
import NavigationContext from "./Navigation";
import { useContext } from "react";

export default function useCustomhook() {
  return useContext(NavigationContext);
}
