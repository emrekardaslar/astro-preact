import { CounterProvider } from '../contexts/CounterContext';
import Counter from '../components/Counter';
import CounterDisplay from '../components/CounterDisplay';

function ReactIsland() {
    return (
        <CounterProvider >
            <div style="text-align: center; padding: 2rem;">
                <CounterDisplay />
                <Counter />
            </div>
        </CounterProvider>
    )
}

export default ReactIsland