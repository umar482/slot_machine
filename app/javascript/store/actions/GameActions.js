import axios from "axios"

export const Spin = () => {
  return async (dispatch) => {
    dispatch({
      type: "SPIN_FRUITS",
      payload: axios.get("/game/spin")
    })
  }
}

export const Cashout = () => {
  return async (dispatch) => {
    dispatch({
      type: "CASHOUT",
      payload: axios.get("/game/cashout")
    })
  }
}