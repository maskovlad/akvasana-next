const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);
const date = new Date().toLocaleString();

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    <p style="font-size: 16px;">
      Район: <b>${body.regionName}</b> <br>
      Адреса: <b>${body.address}</b> <br>
      Телефон: <b>${body.phone}</b> <br>
      Клієнт?: <b>${body.isClient}</b> <br>
      Тара: <b>${body.bottle}</b> <br>
      Помпа: <b>${body.pomp}</b> <br>
      Кількість: <b>${body.qty}</b> <br>
      Сума: <b>${body.total}</b>
    </p> 
  `;

  const data = {
    to:
      body.address === "test"
        ? process.env.TEST_EMAIL
        : process.env.ORDER_EMAIL,
    from: '"Телеграм-бот 👻" <admin@sviy.site>',
    subject: `Замовлення з Telegram ${date}`,
    html: message,
  };

  mail
    .send(data)
    .then((response) => {
      res.status(response[0].statusCode).json({ status: response[0].headers });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}
