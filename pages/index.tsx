import type { NextPage } from "next";
import Intro from "$components/Intro";
import { home } from "$logic/helpers";
import Post from "$components/Posts";
import { IntroProps } from "interfaces";

export async function getStaticProps() {
	const { user, posts } = await home();
	return {
		props: { user, posts },
	};
}

const Home: NextPage<IntroProps> = ({ user, posts }) => {
	return (
		<div className="grid gap-4">
			<Intro {...user} />
			<Post posts={posts} />
		</div>
	);
};

export default Home;
