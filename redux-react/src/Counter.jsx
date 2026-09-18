import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/actions/action';

const Counter = () => {
    
    const count = useSelector((state => state.counter.count));
    const dispatch = useDispatch();

    return (
    <div>
        <h1>Count in counter component : {count}</h1>
        <button onClick = {() => dispatch(increment())}>Increment</button>
        <button onClick = {() => dispatch(decrement())}>Decrement</button>
    </div>
   ) 
}

export default Counter;