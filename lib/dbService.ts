import prisma from "@/lib/prisma";

// TODO сповіщення адміну про помилки на телеграм бота Serverless
export const getRegions = async () => {
  try {
    const res = await prisma.akvasanaRegions.findMany({
      where: { minQty: { not: 0 } },
    });
    return res;
  } catch (error) {
    console.error("Помилка запиту до AkvasanaRegions: ", error);
    return false;
  }
};

export const getAccessory = async () => {
  try {
    const res = await prisma.akvasanaAccessory.findMany();
    return res;
  } catch (error) {
    console.error("Помилка запиту до AkvasanaAccessory: ", error);
    return false;
  }
};

