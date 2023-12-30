import SendBasicEmail from '@/components/SendBasicEmail';
import SendTemplateMail from '@/components/SendTemplateMail';

const Page = () => {
	return (
		<>
			<SendBasicEmail />
			<br />
			<SendTemplateMail />
		</>
	);
};

export default Page;
