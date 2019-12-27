import { objToQuery } from '../utils'

const baseUrl = 'https://jsonplaceholder.typicode.com'

const API = {
  POSTS: `${baseUrl}/posts`,
  COMMENTS: `${baseUrl}/comments`,
  ALBUMS: `${baseUrl}/albums`,
  PHOTOS: `${baseUrl}/photos`,
  TODOS: `${baseUrl}/todos`,
  USERS: `${baseUrl}/users`
}

const fetchJson = async (url, params) => {
  try {
    const response = await fetch(`${url}?${objToQuery(params)}`)
    console.log(`url: ${url}?${objToQuery(params)}`)
    const json = await response.json()
    return json
  } catch(e) {
    throw e
  }
}

export const fetchPost = async () => {
  const posts = await fetchJson(API.POSTS)
  return posts
}

export const fetchComments = async (postId='') => {
  const posts = await fetchJson(API.COMMENTS, { postId })
  return posts
}

export const fetchUsers = async () => {
  const posts = await fetchJson(API.USERS)
  return posts
}
