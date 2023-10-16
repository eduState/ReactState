import { MouseEventHandler } from "react";
import { connect } from "react-redux";

import { actionsTypes } from "./store";
import cls from "./Counter2.module.scss";

interface ICounter2Props {
    count: number;
    onIncrement: MouseEventHandler<HTMLButtonElement>;
    onDecrement: MouseEventHandler<HTMLButtonElement>;
}

const Counter2 = (props: ICounter2Props) => {
    return (
        <div className={`Counter ${cls.Counter2}`}>
            <button type="button" onClick={props.onDecrement}>
                -
            </button>
            <p>{props.count}</p>
            <button type="button" onClick={props.onIncrement}>
                +
            </button>
            <p>Redux HOC store</p>
        </div>
    );
};

function mapStateToProps(state: { count: number }) {
    return {
        count: state.count,
    };
}

function mapDispatchToProps(dispatch: Function) {
    return {
        onIncrement: () => {
            const action = { type: actionsTypes.INCREMENT };
            dispatch(action);
        },
        onDecrement: () => {
            const action = { type: actionsTypes.DECREMENT };
            dispatch(action);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
