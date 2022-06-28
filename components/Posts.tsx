import { PostProps, Posts } from "interfaces";
import { NextPage } from "next";
import Link from "next/link";

const Post: NextPage<{ posts: Posts; type: string }> = ({ posts, type }) => {
	return (
		<>
			<h1 className="text-3xl">Recent Posts</h1>
			<div
				className={`grid gap-4 ${
					type === "full" ? "grid-cols-1" : "grid-cols-2"
				}`}
			>
				{posts.map(({ slug, title, date, tags }: PostProps) => {
					return (
						<Link href={`/blog/${slug}`} key={slug}>
							<a href={`/blog/${slug}`}>
								<div className="grid gap-4 border-2 border-red-500 p-4 cursor-pointer">
									<h2 className="text-2xl text-red-500">{title}</h2>

									<p className="text-red-300">{date}</p>
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
							</a>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Post;
