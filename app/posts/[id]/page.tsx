import React from 'react'
import Posts from '../page';
import { Suspense } from 'react';

async function getPost(id: number) {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const res = await fetch(URL);
    if (!res.ok) throw new Error(`Error fetching data. Status code: ${res.status}`);
    const data = res.json();
    return data
}

export default async function dinamicPage(props: any) {
    const { params } = props
    const post = await getPost(params.id);

    const { userId, id, title, body } = post
    return (
        <div>
            <div key={userId}>
                <h1>{id} - {title}</h1>
                <p>{body}</p>
            </div>
            <hr />
            <h2>Otras publicaciones</h2>
            <Suspense fallback={<div><h4>Cargando...</h4></div>}>

                <Posts />
            </Suspense>
        </div>
    )
}
