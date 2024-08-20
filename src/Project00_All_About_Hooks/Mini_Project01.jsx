import { useEffect, useState } from 'react'
import "./hooks.css";

const Mini_Project01 = () => {

    const [counter, setCounter] = useState(0)
    const [Re_renderTimes, setRe_renderTimes] = useState(0)

    useEffect(
        ()=>setRe_renderTimes(pre => pre + 1)
    , [counter])

    return (
        <section className="Hooks_Mini_Project01">
            <button onClick={() => setCounter(previousCount => previousCount - 1)}>-1</button>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter(previousCount => previousCount + 1)}>+1</button>
            <p>Re-render {Re_renderTimes} Times</p>
        </section>
    )
}

export default Mini_Project01
