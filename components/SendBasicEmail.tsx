'use client';
import { Resend } from 'resend';

const SendBasicEmail = () => {
	const resend = new Resend('re_Vt7A7Lnq_EC5tLPHWdg3QZMVFK2M7goim');
	const send_mail = async () => {
		const { data, error } = await resend.emails.send({
			from: 'info@tareqnmd.com',
			to: 'tareqatoffice@gmail.com',
			subject: 'Hello World',
			html: '<strong>It works!</strong>',
		});

		if (error) {
			return console.error({ error });
		}

		console.log({ data });
	};
	return (
		<button
			className="basic-mail-send-btn"
			onClick={send_mail}
		>
			Send a basic Email
		</button>
	);
};

export default SendBasicEmail;
