export const initialState = {
  spinning: false,
  credit: 10,
  fruits: []
}

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SPIN_FRUITS':
      return { ...state, credit: action.payload, spinning: true }
    case 'CASHOUT':
      return { ...state, credit: action.payload, spinning: false }
    default:
      return state
  }
}

export default GameReducer
