import type React from "react";
import type { IconType } from "react-icons";

export type VehicleCategory = "passenger" | "commercial";

export type VehicleIcon =
  | IconType
  | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export interface VehicleMeta {
  label: string;
  Icon: VehicleIcon;
  category: VehicleCategory;
}

export type VehicleUiMeta = {
  bg: string;
  text: string;
};
