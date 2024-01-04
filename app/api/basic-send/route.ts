import { EmailTemplate } from '@/components/email/basic-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ firstName }: { firstName: string }) {
	try {
		const data = await resend.emails.send({
			from: 'no-reply@tareqnmd.com',
			to: ['tareqatoffice@gmail.com'],
			bcc: ['tareqatoffice@gmail.com'],
			cc: ['tareqatoffice@gmail.com'],
			subject: 'Basic Email Send',
			react: EmailTemplate({ firstName }),
		});

		return Response.json(data);
	} catch (error) {
		return Response.json({ error });
	}
}
