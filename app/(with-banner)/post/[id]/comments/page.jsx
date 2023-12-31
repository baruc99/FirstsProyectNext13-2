import Link from "next/link";
import Error from "./error";
import Image from "next/image";

const fetchComents = async (id) => {
    await new Promise( resolve => setTimeout(resolve, 1000) )
    //throw new Error('Error al cargar los comentarios')

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
                    <Image height={'50'} width={'50'} src={`https://i.pravatar.cc/150?img=${comment.id}`} alt={comment.name} />
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            );
        })}
        </ul>
    )
}