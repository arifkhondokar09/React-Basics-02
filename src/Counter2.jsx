import { useState } from "react";

export default function Counter2() {

    const [count, setCount] = useState(0)

    const handlePlus = () => {
        const updatedCount = count + 1;
        setCount(updatedCount)
    }

    const handleMinus = () => {
        if (count > 0) {
            setCount(count - 1)
        }

    }

    function handleZero() {
        setCount(0)
    }
    return (
        <div className="cards">
            <h2>COUNTER     {count}</h2>
            <button onClick={handlePlus}>Plus</button>
            <button onClick={handleMinus}>Minus</button>
            <button onClick={handleZero}>Zero</button>
        </div>
    )
}