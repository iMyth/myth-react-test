import React from 'react'
import UserList from '../components/list/UserList'
import { connect } from 'react-redux'
import { getUsers } from '../store/reducers/users'

const UserContainer = ({ users }) => (
  <div className="post-container">
    <UserList users={users} />
  </div>
)

const mapStateToProps = (state) => ({
  users: getUsers(state)
})

export default connect(
  mapStateToProps
)(UserContainer)