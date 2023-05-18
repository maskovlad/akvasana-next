import { AkvasanaOrder } from "@/types/AkvasanaData";

export const postOrder = async (data: AkvasanaOrder) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/add-order`, {
      method: "post",
      body: JSON.stringify(data),
    });
    if (res.status != 200) {
      console.error(
        "Помилка запису замовлення до бази даних: res.status=",
        res.status
      );
    }
    return res;
  } catch (error) {
    console.error("Помилка запису замовлення до бази даних: ", error);
    return false;
  }
};

export const mailOrder = async (data: AkvasanaOrder) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/send-email`,
      {
        method: "post",
        body: JSON.stringify(data),
      }
    );
    if (res.status != 202) {
      console.error(
        "Помилка відправки замовлення по email: res.status=",
        res.status
      );
    }
    return res.status;
  } catch (error) {
    console.error("Помилка відправки замовлення по email: ", error);
  }
};
