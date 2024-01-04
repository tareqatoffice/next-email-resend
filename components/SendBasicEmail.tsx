'use client';
import { Resend } from 'resend';

const SendBasicEmail = () => {
	// const resend = new Resend('re_Vt7A7Lnq_EC5tLPHWdg3QZMVFK2M7goim');
	const resend = new Resend('re_a6Tu7TPx_5DQNSUamSZ1Zz5psGrxYoAP7');
	const send_mail = async () => {
		const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['delivered@resend.dev'],
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
