import { createStore } from "redux";
import productreducer from "./reducer/productReducer";

const store = createStore(productreducer);

export default store;
