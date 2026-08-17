import { useState } from 'react'

function SingleCounter(){
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    };

    const dec = () => {
        setCount(count -1);
    };

    return (
        <div>
            <h1>Counter Value : {count}</h1>
            <button onClick = {inc}>Increment</button>
            <button onClick = {dec}>Decrement</button>
        </div>
    );
}

export default SingleCounter;