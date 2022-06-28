const API: any = process.env.DEV_API_KEY;
const USERNAME: any = process.env.DEV_USERNAME
export const home = async (limit?: number) => {
    const user = await intro();
    const posts = await getPosts(limit);
    return {
        user,
        posts
    };
}


export const intro = async () => {
    const data = await getHelper("https://dev.to/api/users/me");
    return data;
}

export const getPosts = async (limit: number = 4, page: number = 1) => {

    const _posts = await getHelper(`https://dev.to/api/articles/me?per_page=${limit}&page=${page}`);
    const posts = _posts.map(({ title, published_at, tag_list, slug }: any) => {
        const _date = new Date(published_at);
        let tags = tag_list;
        const date = _date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        });
        return { title, date, tags, slug };
    });
    return posts;
}

export const getPostBySlug = async (slug: string) => {
    const post = await getHelper(`https://dev.to/api/articles/${USERNAME}/${slug}`);
    return post;
}

export const getComments = async (id: number) => {
    const comments = await getHelper(`https://dev.to/api/comments?a_id=${id}`);
    return comments;
}

export const getHelper = async (url: string) => await fetch(url, {
    headers: {
        "api-key": API,
    },
}).then(res => res.json());