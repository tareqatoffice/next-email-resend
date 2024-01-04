import { EmailTemplate } from '@/components/email/basic-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	try {
		const emails = ['tareqnmd@gmail.com', 'tareqatoffice@gmail.com'];
		const unique_emails = [...new Set(emails)];
		const emailPromises = unique_emails.map((email) => {
			return resend.emails.send({
				from: 'no-reply@tareqnmd.com',
				to: email,
				reply_to: 'supprot@tareqnmd.com',
				subject: 'Multiple Email Send',
				react: EmailTemplate({ firstName: 'John' }),
			});
		});
		const responses = await Promise.all(emailPromises);

		return Response.json({ status: 200, responses });
	} catch (error) {
		return Response.json({ error });
	}
}
