'use client'
import { useState } from "react"

export function Counter() {
    const [count, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(count + 1)
    }

    return (
        <div>
            <p>Count: {count} </p>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}
