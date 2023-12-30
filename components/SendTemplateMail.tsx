'use client';
import { Resend } from 'resend';
import { EmailTemplate } from './email/basic-template';

const SendTemplateMail = () => {
	const resend = new Resend('re_Vt7A7Lnq_EC5tLPHWdg3QZMVFK2M7goim');
	const send_mail = async () => {
		try {
			const data = await resend.emails.send({
				from: 'Acme <onboarding@resend.dev>',
				to: ['delivered@resend.dev'],
				subject: 'Hello world',
				react: EmailTemplate({
					firstName: 'John',
				}) as React.ReactElement,
			});

			return Response.json(data);
		} catch (error) {
			return Response.json({ error });
		}
	};

	return (
		<button
			className="basic-mail-send-btn"
			onClick={send_mail}
		>
			Send Template Email
		</button>
	);
};

export default SendTemplateMail;
