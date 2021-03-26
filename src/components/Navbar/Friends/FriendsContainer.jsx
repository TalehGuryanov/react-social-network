import Friends from './Friends';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  }
}

const FriendsContainer = connect(mapStateToProps, null)(Friends);

export default FriendsContainer;