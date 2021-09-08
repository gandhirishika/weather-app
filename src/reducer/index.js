import placedatareducer from "./placedatareducer";
import placereducer from "./placereducer";
import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
const rootReducer = combineReducers({
   placeData: placedatareducer,
   place: placereducer,
   theme  : themeReducer,
});
export default rootReducer;
