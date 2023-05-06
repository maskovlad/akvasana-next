import { NextApiRequest, NextApiResponse } from "next";
import bot from "@/lib/bot/bot";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log("Bot Request: ", request.body?.message?.text);

  if (request.body?.message?.text) {
    try {
      await bot.handleUpdate(request.body);

      response.status(200).json({
        body: "",
      });
    } catch (error) {
      console.error("Помилка обміну з Telegram: ", error);
    }
  } else {
    console.error("Це повідомлення не з Telegram");
  }
}
