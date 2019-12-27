import * as MUTATION_TYPES from './types'
import { fetchUsers } from '../../api'

export const fetchAllUsers = () => dispatch => {
  return fetchUsers().then(users => {
    dispatch(retrieveUserSuccess(users))
  })
}

export const retrieveUser = () => ({
  type: MUTATION_TYPES.RETRIEVE_USER_INFO
})

export const retrieveUserSuccess = result => ({
  type: MUTATION_TYPES.RETRIEVE_USER_INFO_SUCCESS,
  result
})

export const retrieveUserFailure = error => ({
  type: MUTATION_TYPES.RETRIEVE_USER_INFO_ERROR,
  error
})
