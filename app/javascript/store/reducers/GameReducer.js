export const initialState = {
  spinning: false,
  credit: 10,
  fruits: []
}

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, credit: action.payload.data.credit, spinning: false }
    case 'SPIN_FRUITS':
      return { ...state, credit: action.payload.data.credit, spinning: true }
    case 'CASHOUT':
      return { ...state, credit: action.payload.data.credit, spinning: false }
    default:
      return state
  }
}

export default GameReducer
