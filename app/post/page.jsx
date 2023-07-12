import { ListOfPost } from "./[id]/listOfPosts";
export default async function postPage({ params }) {

    return (
        <section>
           <ListOfPost />
        </section>
    )
}
