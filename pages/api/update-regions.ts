import prisma from "@/lib/prisma";
import { Region } from "@/types/AkvasanaData";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body);

  try {
    await Promise.all(
      data.map(async (region: Region) => {
        await prisma.akvasanaRegions.update({
          where: { id: region.id },
          data: region,
        });
      })
    );
    res.json({ status: 200 });
  } catch (error) {
    console.error({ error });
    res.json({ status: 500 });
  }
}
