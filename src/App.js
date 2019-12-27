import React from 'react'
import { Router, Route } from 'react-router'
import { createHashHistory } from 'history'
import { fetchAllPosts, fetchAllUsers } from './store/actions'
import PostContainer from './containers/Posts'
import UserContainer from './containers/Users'
import DetailsContainer from './containers/Details'
import Loading from './components/Loading'
import store from './store'
import './App.less'

function App() {
  return (
    <Router history={createHashHistory()}>
      <Route path="/login" component={() => (<div>login</div>)} />
      <Route path="/posts" component={() => (<PostContainer />)} />
      <Route path="/users" component={() => (<UserContainer />)} />
      <Route path="/details" component={() => (<DetailsContainer />)} />
      <Route path="/loading" component={() => (<Loading />)} />
      {/* <Route path="*" component={() => (<div>404 not found！</div>)} /> */}
    </Router>
  );
}

store.dispatch(fetchAllPosts())
store.dispatch(fetchAllUsers())


export default App
