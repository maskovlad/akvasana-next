import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["cyrillic-ext"], weight: ["700"]  })

export const comfortaaFont = comfortaa.className;