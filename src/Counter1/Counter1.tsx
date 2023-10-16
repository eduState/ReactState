import { useState } from "react";
import cls from "./Counter1.module.scss";

export const Counter1 = () => {
    const [count, setCount] = useState<number>(0);

    function decrement() {
        setCount(count - 1);
    }
    function increment() {
        setCount(count + 1);
    }

    return (
        <div className={`Counter ${cls.Counter1}`}>
            <button type="button" onClick={decrement}>
                -
            </button>
            <p>{count}</p>
            <button type="button" onClick={increment}>
                +
            </button>
            <p>useState store</p>
        </div>
    );
};
