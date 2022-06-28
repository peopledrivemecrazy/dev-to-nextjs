import { Comments } from "interfaces";
import { NextPage } from "next";

const CommentsComponent: NextPage<{ comments: Comments[] }> = ({
	comments,
}) => {
	return (
		<div>
			{comments.map(({ body_html, children, user }, i) => {
				return (
					<div key={i} className="border-2 border-red-500 p-4">
						<div className="user py-4 text-red-500">{user.username}</div>
						<div
							className="pl-4"
							dangerouslySetInnerHTML={{ __html: body_html }}
						/>
						{children.length > 0 && <CommentsComponent comments={children} />}
					</div>
				);
			})}
		</div>
	);
};

export default CommentsComponent;
