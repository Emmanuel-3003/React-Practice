import { useState } from 'react'

function MultipleCounter() {
    const [counters, setCounters] = useState([{id : 1, value : 0}]);

    const addCounter = () => {
        setCounters([...counters, {id : counters.length + 1, value : 0}]);
    };

    const incCounter = (id) => {
        setCounters(counters.map (counter => 
        counter.id === id ? {...counter, value : counter.value + 1} : counter
        ));
    };

    return (
        <div>
            <h1> HELLO PEOPLE</h1>
            <button onClick = {addCounter}>Add Counter</button>
            <ul>
                {
                    counters.map(counter => (
                        <li key = {counter.id}>
                            Counter {counter.id} : {counter.value} <button onClick = {() =>incCounter(counter.id)}>Increment</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default MultipleCounter;