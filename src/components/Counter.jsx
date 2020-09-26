import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleClick_sum = () => {
        alert('클릭 이벤트 확인')
        setCount(count + 1)
    }
    
    const handleClick_sub = () => {
        setCount(count - 1)
    }

    return <>
        <h1>Counter : {count}</h1>
        <button onClick={handleClick_sum}>+1</button>
        <button onClick={handleClick_sub}>-1</button>
    </>
}

export default Counter