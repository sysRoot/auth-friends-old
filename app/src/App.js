import React from 'react';
import FriendList from './components/FriendList';
import { connect } from 'react-redux';
import { getFriends } from './actions';

import 'semantic-ui-css/semantic.min.css';

function App(props) {
  return (
    <FriendList friends={props.friends} getFriends={props.getFriends} />
  );
}
const mapStateToProps = state => ({
  friends: state.friends,
  error: state.error,
  isLoading: state.isLoading
})
export default connect(mapStateToProps, { getFriends })(App);
