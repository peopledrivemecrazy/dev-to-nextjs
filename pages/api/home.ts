// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};
const API: any = process.env.DEV_API_KEY;
const SITE = process.env.SITE;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const response = await fetch("https://dev.to/api/users/me", {
		method: "GET",
		headers: {
			"api-key": API,
			"Content-Type": "application/json",
		},
	});
	const user = await response.json();
	res.status(200).json(user);
}
