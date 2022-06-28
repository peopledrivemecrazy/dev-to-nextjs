import Header from "$components/Header";
import Footer from "$components/Footer";

type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<>
			<Header src="/vercel.svg" alt="Vercel" className="invert" />
			<main className="p-8 max-w-[56em] mx-auto">
				<div>{children}</div>
			</main>
			<Footer />
		</>
	);
}
