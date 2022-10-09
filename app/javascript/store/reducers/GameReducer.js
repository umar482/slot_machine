export const initialState = {
  spinning: false,
  credit: 10,
  loading: true,
  slots: []
}

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INTIALIZE':
      return { ...state, credit: action.payload.data.credit, spinning: false, loading: false }
    case "SPINING":
    return { ...state, spinning: action.payload}
    case 'SPIN':  
      return { ...state, credit: action.payload.data.credit, slots: action.payload.data.slots }
    case 'CASHOUT':
      return { ...state, credit: action.payload.data.credit, spinning: false }
    default:
      return state
  }
}

export default GameReducer
