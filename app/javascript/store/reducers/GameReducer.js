export const initialState = {
  spinning: false,
  credit: 10,
  loading: true,
  slots: []
}

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INTIALIZE':
      console.log('credit',action.payload.data.credit)
      return { ...state, credit: action.payload.data.credit, spinning: false, loading: false }
    case "SPINING":
    return { ...state, spinning: action.payload}
    case 'SPIN':  
      console.log('reducer',action.payload.data.slots)
      return { ...state, credit: action.payload.data.credit, spinning: false, slots: action.payload.data.slots }
    case 'CASHOUT':
      return { ...state, credit: action.payload.data.credit, spinning: false }
    default:
      return state
  }
}

export default GameReducer
