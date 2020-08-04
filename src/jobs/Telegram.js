import { sendMessage } from '../lib/Telegram';

export default {
  key: 'srvNotificationTelegram',
  async handle({ data }) {
    const { chatId, message } = data;

    sendMessage({ chatId, message });
  },
};
