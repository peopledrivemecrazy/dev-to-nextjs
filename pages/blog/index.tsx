import Post from "$components/Posts";
import { getPosts } from "$logic/helpers";
import { Posts } from "interfaces";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async ({
	query,
	resolvedUrl,
}) => {
	const page = Number(query.page) || 1;
	const posts = await getPosts(10, page);
	return {
		props: { posts, page },
	};
};

const Blog: NextPage<{ posts: Posts; page: number }> = ({ posts, page }) => {
	const hasNext = posts.length === 10;
	return (
		<>
			<div className="grid gap-4">
				<Post posts={posts} type="full" />
			</div>
			<div className="flex gap-4 justify-center pt-8">
				{page !== 1 ? (
					<Link href={`/blog?page=${page - 1}`}>
						<a href={`/blog?page=${page - 1}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="cursor-pointer h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7 16l-4-4m0 0l4-4m-4 4h18"
								/>
							</svg>
						</a>
					</Link>
				) : (
					""
				)}
				{hasNext ? (
					<Link href={`/blog?page=${page + 1}`}>
						<a href={`/blog?page=${page + 1}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="cursor-pointer h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
					</Link>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default Blog;
