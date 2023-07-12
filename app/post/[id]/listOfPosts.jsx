
import { LikeButton } from "./likeButton";
import Link from "next/link";


//  getStaticPropos  
//    ➡️ return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

//  getServerSideProps
//    ➡️ return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store'}).then(res => res.json())

//  incremental static regeneration
const fetchPost = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export async function ListOfPost() {
  const posts = await fetchPost();

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href='/post/[id]' as={`post/${ post.id }`} >
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
