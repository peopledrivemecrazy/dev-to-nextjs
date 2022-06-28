import CommentsComponent from "$components/Comment";
import { getComments, getPostBySlug } from "$logic/helpers";
import { BlogPage, Comments, Post, PostProps } from "interfaces";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const slug: string = query.slug as string;

	const post = await getPostBySlug(slug);
	const comments = await getComments(post.id);

	return {
		props: { post, comments },
	};
};

const BlogPage: NextPage<BlogPage> = ({ post, comments }) => {
	const { body_html, title, tags } = post;
	return (
		<main className="p-8">
			<div className="grid gap-8 py-8">
				<h1 className="text-3xl">{title}</h1>
				<div className="flex gap-4 items-center">
					{tags.map((tag, i) => {
						return (
							<span
								key={i}
								className="text-sm text-red-500 border border-red-500 p-2"
							>
								{tag}
							</span>
						);
					})}
				</div>
			</div>
			<div
				className="dev-container"
				dangerouslySetInnerHTML={{ __html: body_html }}
			/>
			<div className="py-8">
				<h2 className="text-3xl py-4">Comments</h2>
				<div className="p-4 border-2 border-red-500">
					{comments.length > 0 ? (
						<CommentsComponent comments={comments} />
					) : (
						<p>No comments</p>
					)}
				</div>
			</div>
		</main>
	);
};

export default BlogPage;
