import { Counter1 } from "./Counter1";
import Counter2, { store } from "./Counter2";
import { Counter3 } from "./Counter3";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* useState store */}
            <Counter1 />

            {/* Redux HOC store */}
            <Counter2 store={store} />

            {/* Redux hook store */}
            <Counter3 />
        </div>
    );
}

export default App;
