import { Counter } from "./counter"

export default function PostLayaout({children}){
    return( 
       <div>
            <small>Home &bull; Posts</small>
            {/* <Counter /> */}
            {children}
            
       </div> 
    )
}