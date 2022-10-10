import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from "redux-thunk";
import Game from "./reducers/GameReducer"

const rootReducer = combineReducers({
  Game: Game
});

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );
};

export default configureStore;