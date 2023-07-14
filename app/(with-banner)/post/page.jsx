import { Suspense } from "react";
import { ListOfPost } from "./[id]/listOfPosts";
export default async function postPage({ params }) {

    return (
        <section>
            <Suspense fallback={"Cargando post..."}>
                <ListOfPost />
            </Suspense>
        </section>
    )
}
