
// services/workersService.ts
export interface Worker {
  name: string;
  village: string;
  occupation: string;
  mobile_no: string;
  imgSrc: string;
}

const sheetId = "1zeaDjkbOtWjIxLx-YxZKHA0b1mSuSZsd2mgcw5C_5Pk";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;

function normalizeName(name: string): string {
  const safe = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return `images/${safe}.jpg`;
}

export async function fetchWorkers() {
  // const SHEET_URL = import.meta.env.VITE_SHEET_URL;

  const res = await fetch(SHEET_URL);
  const text = await res.text();

  // Extract the JSON inside the weird wrapper Google returns
  const jsonString = text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1);

  let parsed;
  try {
    parsed = JSON.parse(jsonString);
  } catch (err) {
    console.error("JSON parsing failed:", err);
    throw new Error("Invalid sheet data");
  }

  const rows = parsed.table?.rows;
  if (!rows) throw new Error("Sheet format is incorrect");

  return rows
    .map((r: any) => r.c)
    .filter(Boolean)
    .map((cells: any) => ({
      name: cells[1]?.v || "",
      contact: cells[2]?.v || "",
      village: cells[3]?.v || "",
      occupation: cells[4]?.v || "",
      imgSrc: `${cells[1]?.v.replaceAll(" ", "-")}.jpg` || "",
    }));
}
