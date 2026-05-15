export const palette = {
  primary:       "#0F766E",
  primaryHover:  "#115E59",
  primarySoft:   "#CCFBF1",
  primarySofter: "#F0FDFA",
  primaryInk:    "#134E4A",
  accent:        "#0891B2",
} as const;

export type Palette = typeof palette;
