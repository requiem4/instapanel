import { combineReducers } from 'redux';
import BeerReducer from '../Pages/Beer/BeerReducer'

/**
 * Root Reducer
 * @type {Reducer<CombinedState<unknown>>}
 */
const Reducers = combineReducers({
  beer: BeerReducer,
})
export default Reducers
