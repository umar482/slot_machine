import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from "redux-thunk";
import User from "./reducers/UserReducer"
import Game from "./reducers/GameReducer"

const rootReducer = combineReducers({
  User: User,
  Game: Game
});

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );
};

export default configureStore;