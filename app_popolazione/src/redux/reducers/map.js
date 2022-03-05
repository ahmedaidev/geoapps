import { SET_CURRENT_POSITION } from '../actions/types'

const initialState = {
  center: [45.438351, 10.99171],
  zoom: 12,
  position: [],
}

const mapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_POSITION:
      return {
        ...state,
        position: payload,
      }
    default:
      return state
  }
}

export default mapReducer
