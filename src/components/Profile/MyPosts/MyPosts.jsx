import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let newPostElemnt  = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElemnt.current.value;
    props.updateNewPostText(text);
  }

  let postsElem = props.postsData.map(item => <Post id={item.id} message={item.message} likesCount={item.likesCount}/>)

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
        <button onClick={addPost} type="button" className={s.post__btn}>Add post</button>
      </div>
      <div>
        {postsElem}
      </div>
    </div>
  )
}

export default MyPosts;