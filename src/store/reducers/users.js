import * as MUTATION_TYPES from '../actions/types'

export default (state = {
  loading: true,
  list: []
}, action) => {
  switch (action.type) {
    case MUTATION_TYPES.RETRIEVE_USER_INFO: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case MUTATION_TYPES.RETRIEVE_USER_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        list: action.result
      }
    }
    case MUTATION_TYPES.RETRIEVE_USER_INFO_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    default:
      return state
  }
}

export const getUsers = (state) => {
  console.log('getPosts====>', state.users)
  return state.users
}
