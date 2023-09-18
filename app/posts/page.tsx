import PostCard from "@/components/PostCard";

const URL = 'https://jsonplaceholder.typicode.com/posts';

type Post = [{
    id: number;
    title: string;
    body: string;
}]

async function getData() {
    const res = await fetch(URL);
    if (!res.ok) throw new Error(`Fetch error. Status ${res.status}`);
    const data: Post = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data
}

export default async function Posts() {
    const data = await getData();
    return (
        <div>
            {data.map((posts) => (
                <PostCard key={posts.id} id={posts.id} title={posts.title} body={posts.body} />
            )

            )}
        </div>
    )
}
