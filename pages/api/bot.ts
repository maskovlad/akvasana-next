import { NextApiRequest, NextApiResponse } from "next";
import bot from "@/lib/bot/bot";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  
  if (request.body?.message?.text) {
    try {
      await bot.handleUpdate(request.body);
    } catch (error) {
      console.error("Помилка обміну з Telegram: ", error);
    }
  }

  response.status(200).json({
    body: "",
  });
}
