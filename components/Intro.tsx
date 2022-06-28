import { NextPage } from "next";
import Link from "next/link";

interface UserProps {
	name: string;
	profile_image: string;
	twitter_username: string;
	github_username: string;
	website_url: string;
	summary: string;
}
// interface PostProps {
// 	title: string;
// 	slug: string;
// 	date: string;
// 	tags: string[];
// }

// interface IntroProps {
// 	user: UserProps;
// 	posts: PostProps[];
// }
const Intro: NextPage<UserProps> = ({
	name,
	profile_image,
	twitter_username,
	github_username,
	website_url,
	summary,
}) => {
	const socialLinks = [
		{
			icon: "icons/github.svg",
			href: `https://github.com/${github_username}`,
		},
		{
			icon: "icons/twitter.svg",
			href: `https://twitter.com/${twitter_username}`,
		},
		{
			icon: "icons/site.svg",
			href: website_url,
		},
	];
	return (
		<div className="grid justify-items-center items-center border-2 border-red-500 mt-16 gap-8 p-4">
			<img
				src={profile_image}
				alt=""
				className="rounded-full border-2 border-red-500 -mt-20 w-64"
			/>
			<p className="text-3xl">{name}</p>
			<p>{summary}</p>

			<div className="flex gap-4">
				{socialLinks.map(({ href, icon }) => {
					return (
						<Link href={href} key={href}>
							<a href={href}>
								<img src={icon} alt="" className="invert" />
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Intro;
