import axios from 'axios'
import { url } from '../../config/config'
import {
  FETCH_FEATURES_SUCCESS,
  FETCH_FEATURES_PENDING,
  FETCH_FEATURES_FAILED,
} from './types'

export const fetchFeatures = () => async dispatch => {
  try {
    dispatch({ type: FETCH_FEATURES_PENDING })
    const { data } = await axios.get(url)
    let appoggio = 0
    for (let j = 0; j < data.features.length; j++) {
      for (
        let i = 0;
        i < data.features[j].geometry.coordinates[0][0].length;
        i++
      ) {
        appoggio = data.features[j].geometry.coordinates[0][0][i][1]
        data.features[j].geometry.coordinates[0][0][i][1] =
          data.features[j].geometry.coordinates[0][0][i][0]
        data.features[j].geometry.coordinates[0][0][i][0] = appoggio
      }
    }

    dispatch({
      type: FETCH_FEATURES_SUCCESS,
      payload: data.features,
    })
  } catch (err) {
    dispatch({
      type: FETCH_FEATURES_FAILED,
      payload: err,
    })
  }
}
