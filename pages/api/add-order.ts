import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = JSON.parse(req.body);

  const added = await prisma.akvasanaOrders.create({
    data,
  });

  res.json(added);
};
