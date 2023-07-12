
import { LikeButton } from "./likeButton";

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
      <h2 style={{ color: '#09f' }}>{post.title}</h2>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ));
}
