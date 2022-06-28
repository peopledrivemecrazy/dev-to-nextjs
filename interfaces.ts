export interface UserProps {
    name: string;
    profile_image: string;
    twitter_username: string;
    github_username: string;
    website_url: string;
    summary: string;
}

export interface PostProps {
    title: string;
    slug: string;
    date: string;
    tags: string[];
}
export type Posts = PostProps[];

export interface IntroProps {
    user: UserProps;
    posts: Posts;
}




export interface Post {
    type_of: string
    id: number
    title: string
    description: string
    readable_publish_date: string
    slug: string
    path: string
    url: string
    comments_count: number
    public_reactions_count: number
    collection_id: number
    published_timestamp: string
    positive_reactions_count: number
    cover_image: any
    social_image: string
    canonical_url: string
    created_at: string
    edited_at: any
    crossposted_at: any
    published_at: string
    last_comment_at: string
    reading_time_minutes: number
    tag_list: string
    tags: string[]
    body_html: string
    body_markdown: string
    user: User
}

export interface User {
    name: string
    username: string
    twitter_username: string
    github_username: string
    website_url: string
    profile_image: string
    profile_image_90: string
}


export interface Comments {
    type_of: string;
    id_code: string;
    created_at: string;
    body_html: string;
    user: User;
    children: Comments[];
}[]

export interface BlogPage {
    post: Post;
    comments: Comments[];
}