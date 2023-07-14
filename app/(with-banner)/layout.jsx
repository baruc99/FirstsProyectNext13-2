import { Counter } from "./post/counter"


export default function Layaout({children}){
    return( 
       <div>
            <marquee style={{ background:'#fff'  , color: 'purple' }}>el mejor canal de twich de programacion</marquee>
            {/* <Counter /> */}
             {children}
            
       </div> 
    )
}