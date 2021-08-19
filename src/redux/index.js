import { createStore } from "redux";
import root from "./reducer/root";

const store = createStore(root)

export default store