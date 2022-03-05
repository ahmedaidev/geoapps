import { combineReducers } from 'redux'
import featureReducer from './features'
import mapReducer from './map'

export default combineReducers({
  map: mapReducer,
  feature: featureReducer,
})
