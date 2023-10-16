import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const rootStore = createStore(rootReducer, composeWithDevTools());
