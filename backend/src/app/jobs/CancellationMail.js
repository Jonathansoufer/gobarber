import { format, parseISO } from 'date-fns';
import Mail from '../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMain';
  }

  async handle({ data }) {
    const { appointment } = data;

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Appointment cancelled.',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'day' dd 'of' MMMM', at' H:mm'h'"
        ),
      },
    });
  }
}

export default new CancellationMail();
