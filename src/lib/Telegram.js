import Telegraf from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    `Bem vindo\nNotificações da Educartic\nSeu código é ${ctx.update.message.chat.id}`
  );
});

bot.launch();

const sendMessage = ({ chatId, message }) => {
  const config = { disable_web_page_preview: true, parse_mode: 'Markdown' };
  bot.telegram.sendMessage(chatId, message, config);
};

export { sendMessage };
