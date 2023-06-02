import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { Accessories, Accessory } from "@/types/AkvasanaData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data:Accessories = JSON.parse(req.body);

  try {
    await Promise.all(
      data.map(async (accry: Accessory) => {
        await prisma.akvasanaAccessory.update({
          where: { id: accry.id },
          data: accry,
        });
      })
    );
    res.json({ status: 200 });
  } catch (error) {
    console.error(error);
    res.json({ status: 500 });
  }
}
