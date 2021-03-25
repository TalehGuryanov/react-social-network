import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  return ( 

    <StoreContext.Consumer> 
      {
        (store) => {

          let state = store.getState().profilePage;

          let AddPost = () => {
            store.dispatch(addPostActionCreator());
          }

          let PostChange = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text));
          }

          return <MyPosts
            addPost={AddPost}
            postChange={PostChange}
            postsData={state.postsData}
            newPostText={state.newPostText}
          />
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;