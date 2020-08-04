import Bull from 'bull';

// const mailQueue = new Bull('srvNotificationMailer');
// const smsQueue = new Bull('srvNotificationSMS');
// const whatsappQueue = new Bull('srvNotificationWhatsapp');
const telegramQueue = new Bull('srvNotificationTelegram');

const app = async () => {
  // await mailQueue.add({
  //   from: 'teste@georastreamento.com.br',
  //   to: ['matheus.dubberstein@el.com.br', 'jeudiprando@gmail.com'],
  //   subject: 'teste',
  //   text: 'testando 123',
  // html,
  // attachments,
  //   templateId: 'd-f211ac2175e14698857eeb7177fe0ba4',
  //   templateParams: {
  //     name: 'Goku',
  //   },
  // });
  // await smsQueue.add({
  //   phone: '27988712217',
  //   message: 'Oi! Eu sou o Goku.',
  // });
  await telegramQueue.add({
    chatId: 945510491,
    message: 'Oi! Eu sou o Goku.',
  });
};

app();

// import redis from 'redis';

// const publisher = redis.createClient();

// publisher.publish('notification channel', 'a message');
