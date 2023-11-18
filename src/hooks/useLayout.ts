import { LayoutContext } from "@/context/LayoutContext";
import { useContext } from "react";

export const useLayout = () => useContext(LayoutContext)