import * as MUTATION_TYPES from '../actions/types'

export default (state = {
  loading: true,
  list: []
}, action) => {
  switch (action.type) {
    case MUTATION_TYPES.RETRIEVE_POST: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case MUTATION_TYPES.RETRIEVE_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        list: action.result
      }
    }
    case MUTATION_TYPES.RETRIEVE_POST_ERROR: {
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

export const getPosts = (state) => {
  console.log('getPosts====>', state.posts)
  return state.posts
}
