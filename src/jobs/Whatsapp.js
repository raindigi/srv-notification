const axios = require('axios');

export default {
  key: 'srvNotificationWhatsapp',
  async handle({ data }) {
    try {
      const { phone, message } = data;

      const phoneFMT = `55${phone.match(/\d/g).join('')}`;
      const response = await axios.post(
        `https://api.z-api.io/instances/${process.env.ZAPI_INSTANCE}/token/${process.env.ZAPI_TOKEN}/send-messages`,
        { phone: phoneFMT, message }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
