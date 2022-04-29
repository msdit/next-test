import { combineReducers } from 'redux'
import { dataReducer, IDataStateProps } from './dataReducer'
import { userReducer, IUserStateProps } from './userReducer'

const reducers = {
    data: dataReducer,
    user: userReducer,
}

export type IReduxState = {
    data: IDataStateProps
    user: IUserStateProps
}

export default combineReducers(reducers)
