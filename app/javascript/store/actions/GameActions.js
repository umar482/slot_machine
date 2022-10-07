import axios from "axios"

export const Intailize = () => {
  return async (dispatch) => {
    dispatch({
      type: "INTIALIZE",
      payload: await axios.get("/api/v1/game/intailize", {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      })
    })
  }
}

export const Spin = () => {
  return async (dispatch) => {
    dispatch({
      type: "SPIN",
      payload: await axios.get("/api/v1//game/spin")
    })
  }
}

export const Cashout = () => {
  return async (dispatch) => {
    dispatch({
      type: "CASHOUT",
      payload: await axios.get("/api/v1//game/cashout")
    })
  }
}