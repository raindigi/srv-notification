const axios = require('axios');

export default {
  key: 'srvNotificationSMS',
  async handle({ data }) {
    try {
      const { phone, message } = data;

      const phoneFMT = `55${phone.match(/\d/g).join('')}`;

      await axios.get(
        `http://www.facilitamovel.com.br/api/simpleSend.ft?user=${
          process.env.FACILITA_USER
        }&password=${
          process.env.FACILITA_PASSWORD
        }&destinatario=${phoneFMT}&msg=${encodeURIComponent(message)}`
      );
    } catch (error) {
      console.log(error);
    }
  },
};
