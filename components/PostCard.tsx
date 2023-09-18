'use client'
import Link from 'next/link';
import React from 'react'

type Post = {
    id: number;
    title: string;
    body: string;
}

export default function PostCard(post: Post) {
    return (
        <div>
            <div key={post.id}>
                <Link href={`/posts/${post.id}`}>
                    <h3>{post.id}. {post.title}</h3>
                </Link>
                <p>{post.body}</p>
                <button onClick={() => { alert(`Post id ${post.id}`) }}>Click</button>
            </div>
        </div>
    )
}
