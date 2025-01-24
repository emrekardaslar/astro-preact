import { useCounter } from '../contexts/CounterContext';

const Counter = () => {
  const { dispatch } = useCounter(); // Ensure this is inside CounterProvider

  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;
