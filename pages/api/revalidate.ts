//^ оновлення посту на вимогу

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { urlPath } = req.body;
  console.log({ urlPath, time: new Date().toISOString() });
  const protocol = process.env.NODE_ENV==="development" ? "http://" : "https://"

  res.setHeader("Access-Control-Allow-Origin", `${protocol}app.${process.env.NEXT_PUBLIC_SITE_URL}`);
  res.setHeader("Access-Control-Allow-Methods", "POST");

  try {
    await res.revalidate(urlPath);
    res.status(200).json({
      message: "OK",
    });
  } catch (error) {
    res.status(500).json({
      message: `Failed to revalidate "${urlPath}"`,
    });
  }
}
