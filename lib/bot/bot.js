const { Telegraf, Stage, session } = require("telegraf");

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);

const stage = new Stage([require("./order.scene")]);
bot.use(session());
bot.use(stage.middleware());

bot.use(require("./start.composer"));

// For longpool update method
// bot.launch().then(() => {
// 	console.log(`bot started on @${bot.options.username}`)
// })

module.exports = bot;
