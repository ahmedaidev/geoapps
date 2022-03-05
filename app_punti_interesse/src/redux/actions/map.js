import { SET_CURRENT_POSITION } from './types'

export const setGps = payload => ({
  type: SET_CURRENT_POSITION,
  payload,
})
