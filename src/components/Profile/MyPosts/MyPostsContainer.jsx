import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState().profilePage;

  let AddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let PostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts 
      addPost={AddPost}
      postChange={PostChange}
      postsData={state.postsData}
      newPostText={state.newPostText}
    />
  )
}

export default MyPostsContainer;