import React from "react";
import { type IconType } from "react-icons";

export type AccentColor =
  | "default"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "orange"
  | "pink"
  | "teal"
  | "cyan";
type IconPosition = "inline" | "top";

export type RadioOption<T extends string> = {
  label?: string;
  value: T;
  Icon?: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  accent?: AccentColor;
};

// TODO: add global accent, to apply accent to all options
type RadioButtonGroupProps<T extends string> = {
  name: string;
  value: T;
  options: RadioOption<T>[];
  onChange: (value: T) => void;
  className?: string;
  iconPosition?: IconPosition;
  accent?: AccentColor;  // global accent
};

const ACCENT_MAP: Record<
  AccentColor,
  { unchecked: string; checked: string }
> = {
  default: {
    unchecked: "bg-gray-100 text-black",
    checked: "bg-gray-700 text-white",
  },
  red: {
    unchecked: "bg-red-100 text-red-600",
    checked: "bg-red-600 text-white",
  },
  green: {
    unchecked: "bg-green-100 text-green-600",
    checked: "bg-green-500 text-white",
  },
  blue: {
    unchecked: "bg-blue-100/90 text-blue-600",
    checked: "bg-blue-700/80 text-white",
  },
  yellow: {
    unchecked: "bg-yellow-100 text-yellow-700",
    checked: "bg-yellow-500 text-white",
  },
  purple: {
    unchecked: "bg-purple-100 text-purple-600",
    checked: "bg-purple-600 text-white",
  },
  orange: {
    unchecked: "bg-orange-100 text-orange-600",
    checked: "bg-orange-500 text-white",
  },
  pink: {
    unchecked: "bg-pink-100 text-pink-600",
    checked: "bg-pink-500 text-white",
  },
  teal: {
    unchecked: "bg-teal-100 text-teal-600",
    checked: "bg-teal-500 text-white",
  },
  cyan: {
    unchecked: "bg-cyan-100 text-cyan-700",
    checked: "bg-cyan-400 text-black",
  },
};

export const RadioToolbar = <T extends string>({
  name,
  value,
  options,
  onChange,
  className,
  iconPosition = "inline",
  accent: globalAccent = "default",
}: RadioButtonGroupProps<T>) => {
  return (
    <div className={`flex flex-row gap-1 p-1.5 rounded-2xl overflow-x-auto relative ${className}`}>
      {options.map(
        ({ label, value: optionValue, Icon, accent }) => {
          const id = `${name}-${optionValue}`;
          const isChecked = value === optionValue;
          const finalAccent = accent ?? globalAccent;
          const { unchecked, checked } = ACCENT_MAP[finalAccent];
const colorClasses = isChecked ? checked : unchecked;
          return (
            <label key={optionValue} htmlFor={id} className="cursor-pointer shrink-0">
              <input
                id={id}
                type="radio"
                name={name}
                value={optionValue}
                checked={isChecked}
                onChange={() => onChange(optionValue)}
                className="peer sr-only"
              />

              <div
                className={`flex ${(iconPosition === "inline") ? "flex-row" : "flex-col" } justify-center items-center w-fit gap-2 px-3 py-1.5 rounded-xl font-semibold text-gray-700
                transition-colors
                  ${colorClasses}
              `}
              >
                {Icon && <Icon size={34} height={34} />}
                <span className="capitalize">{label ?? optionValue}</span>
              </div>
            </label>
          );
        },
      )}
    </div>
  );
};
