import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "./store/reducers/counterReducer";
import cls from "./Counter3.module.scss";

interface IMapStateToProps {
    counterReducer: {
        count: number;
    };
}

export const Counter3 = () => {
    const dispatch = useDispatch();
    const count: any = useSelector<IMapStateToProps>((state) => {
        const { counterReducer } = state;
        return counterReducer.count;
    });

    function onIncrement() {
        const step = Number(prompt());
        const action = incrementCount(isNaN(step) ? 0 : step);
        dispatch(action);
    }

    function onDecrement() {
        const step = Number(prompt());
        const action = decrementCount(isNaN(step) ? 0 : step);
        dispatch(action);
    }

    return (
        <div className={`Counter ${cls.Counter3}`}>
            <button type="button" onClick={onDecrement}>
                -
            </button>
            <p>{count}</p>
            <button type="button" onClick={onIncrement}>
                +
            </button>
            <p>Redux hook store</p>
        </div>
    );
};
