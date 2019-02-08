import { ACTION_NAME } from '../actions/types'

const INITIAL_STATE = {
    name: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_NAME:
            return 'action'
        default:
            return state
    }
}