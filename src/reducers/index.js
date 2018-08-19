import  {combineReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    // es6 property shorthand :)
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer,
})