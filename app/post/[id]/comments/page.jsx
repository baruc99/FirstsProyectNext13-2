import Link from "next/link";

const fetchComents = async (id) => {
    await new Promise( resolve => setTimeout(resolve, 3000) )

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}


export default async function post({ params }) {
    const { id } = params;
    const comments = await fetchComents(id);

    return (
        <ul style={{ background: '#444', fontSize: '12px' }}>
        {comments.map(comment => {
            return (
                <li key={comment.id}>
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            );
        })}
        </ul>
    )
}