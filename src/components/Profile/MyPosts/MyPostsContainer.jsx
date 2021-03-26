import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    postChange: (text) => dispatch(updateNewPostTextActionCreator(text))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;