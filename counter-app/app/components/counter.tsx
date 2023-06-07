import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    //write helper for incrementing and decrementing counter
    const incrementCounter = () => {
        // increment counter
        setCount(count + 1);
    }

    const decrementCounter = () => {
        // decrement counter
        setCount(count - 1);
    }

    return (
        // Write a counter component in Next.js
        <div>
            <h1 className="componentHeading">Counter</h1>
            <p className="countLabel">Count: {count}</p>
            <button className="fancyButton" id="incrementButton" onClick={() => incrementCounter()}>Increment</button>
            <button className="fancyButton" id="decrementButton" onClick={() => decrementCounter()}>Decrement</button>
            <button className="fancyButton" id="resetButton" onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;