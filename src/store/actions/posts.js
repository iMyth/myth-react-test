import * as MUTATION_TYPES from './types'
import { fetchPost } from '../../api'

export const fetchAllPosts = () => dispatch => {
  return fetchPost().then(posts => {
    dispatch(retrievePostSuccess(posts))
  })
}

export const retrievePost = () => ({
  type: MUTATION_TYPES.RETRIEVE_POST
})

export const retrievePostSuccess = result => ({
  type: MUTATION_TYPES.RETRIEVE_POST_SUCCESS,
  result
})

export const retrievePostFailure = error => ({
  type: MUTATION_TYPES.RETRIEVE_POST_ERROR,
  error
})
