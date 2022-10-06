import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from "redux-thunk";
import user from "./reducers/UserReducer"
import game from "./reducers/GameReducer"

const rootReducer = combineReducers({
  user: user,
  game: game
});

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
  );
};

export default configureStore;