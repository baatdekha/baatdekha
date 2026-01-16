
export const OCCUPATION_IDS = [
  "painter",
  "mason",
  "carpainter",
  "electrician",
  "welder",
  "plumber",
  "driver",
  "labor",
  "building contractor",
  "interior designer",
  "vastu director"
]

export type OccupationId = (typeof OCCUPATION_IDS)[number]

export type OccupationIdorAll = OccupationId | "all"


