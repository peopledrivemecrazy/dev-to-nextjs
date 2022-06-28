import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { useRouter } from "next/router";

interface HeaderProps {
	src: string;
	alt: string;
	className?: string;
}

const links = [
	{ href: "/", label: "home" },
	{ href: "/blog", label: "blog" },
];

const Header: NextPage<HeaderProps> = ({ src, alt, className }) => {
	const { pathname } = useRouter();

	return (
		<div className="flex p-4 gap-4 items-center border-b border-slate-700">
			<img src={src} alt={alt} className={`${className} logo`} />

			<Head>
				<title>Shriji</title>
			</Head>
			<>
				{links.map(({ href, label }) => {
					return (
						<Link href={href} key={href}>
							<a className={pathname === `${href}` ? "active" : ""}>{label}</a>
						</Link>
					);
				})}
			</>
		</div>
	);
};

export default Header;
