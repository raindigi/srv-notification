import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default {
  key: 'srvNotificationMailer',
  async handle({ data }) {
    const {
      from,
      to,
      subject,
      text,
      html,
      attachments,
      templateId,
      templateParams,
    } = data;

    await sgMail.send({
      from,
      to,
      subject,
      text,
      html,
      attachments,
      templateId,
      dynamic_template_data: templateParams,
    });
  },
};
