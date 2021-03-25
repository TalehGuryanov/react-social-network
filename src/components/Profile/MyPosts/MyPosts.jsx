import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let newPostElemnt  = React.createRef();
  let postsElem = props.postsData.map(item => <Post id={item.id} message={item.message} likesCount={item.likesCount}/>)

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElemnt.current.value;
    props.postChange(text);
  }

  return (
    <div className={s.posts}>
        my posts

      <div className={s.post__new}>
        <textarea 
          onChange={onPostChange} 
          ref={newPostElemnt} 
          placeholder="Add post" 
          className={s.post__area}
          value={props.newPostText}
        />
        <button onClick={onAddPost} type="button" className={s.post__btn}>Add post</button>
      </div>
      <div>
        {postsElem}
      </div>
    </div>
  )
}

export default MyPosts;