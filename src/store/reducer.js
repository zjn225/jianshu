// 将redux换位redux-immutable，提供了一样的方法
import {combineReducers} from 'redux-immutable';

import {reducer as headerReducer} from '../common/header/store'

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;