import { useCounter } from '../contexts/CounterContext';
import { INCREMENT, DECREMENT, RESET } from '../actions/counterActions';

const Counter = () => {
  const { dispatch } = useCounter();

  return (
    <div>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </div>
  );
};

export default Counter;
