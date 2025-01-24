import { useCounter } from '../contexts/CounterContext';

const CounterDisplay = () => {
  const { state } = useCounter(); // Ensure this is inside CounterProvider

  return <h1>Count: {state.count}</h1>;
};

export default CounterDisplay;
