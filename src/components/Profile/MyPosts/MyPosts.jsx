import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
        my posts

      <div className={s.post__new}>
        <textarea placeholder="Add post" className={s.post__area}>

        </textarea>
        <button type="button" className={s.post__btn}>Add post</button>
      </div>
      <div>
        <Post message="hi" likesCount="15"/>
        <Post message="my first post" likesCount="4"/>
        <Post message="my second post" likesCount="23"/>
      </div>
    </div>
  )
}

export default MyPosts;