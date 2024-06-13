import { usePersistentState } from './usePersistentState';

export default () => {
    const [count, setCount] = usePersistentState('buttonCount', 0);

    return (
        <>
        <p>The button has been clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
        </>
    );
}