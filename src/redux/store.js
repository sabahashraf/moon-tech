import { createStore } from "redux";
import productreducer from "./reducer/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(productreducer, composeWithDevTools());

export default store;
