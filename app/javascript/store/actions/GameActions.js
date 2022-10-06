import axios from "axios"

export const Start = () => {
  return async (dispatch) => {
    dispatch({
      type: "START_GAME",
      payload: await axios.get("/game/start")
    })
  }
}

export const Spin = () => {
  return async (dispatch) => {
    dispatch({
      type: "SPIN_FRUITS",
      payload: await axios.get("/game/spin")
    })
  }
}

export const Cashout = () => {
  return async (dispatch) => {
    dispatch({
      type: "CASHOUT",
      payload: await axios.get("/game/cashout")
    })
  }
}