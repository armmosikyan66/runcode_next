import {combineReducers} from "redux";
import htmlReducer from "./htmlReducer";
import fileTypeReducer from "./fileTypeReducer";
import cssReducer from "./CssReducer";
import jsReducer from "./jsReducer";

const RootReducer = combineReducers({
    html: htmlReducer,
    fileType: fileTypeReducer,
    css: cssReducer,
    js: jsReducer,
    // text: null,
})

export default RootReducer;