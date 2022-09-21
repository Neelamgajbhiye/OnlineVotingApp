import { allReducers } from '../reducers/allReducers'
import { createStore} from 'redux'

const store = createStore(allReducers,window.__REDUX__DEVTOOLS__EXTENSIONS__ &&
    window.__REDUX__DEVTOOLS__EXTENSION__());
export default store;

