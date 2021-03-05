import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  debugger;
  let postsElem = props.postsData.map(item => <Post id={item.id} message={item.message} likesCount={item.likesCount}/>)

  return (
    <div className={s.posts}>
        my posts

      <div className={s.post__new}>
        <textarea placeholder="Add post" className={s.post__area}>

        </textarea>
        <button type="button" className={s.post__btn}>Add post</button>
      </div>
      <div>
        {postsElem}
      </div>
    </div>
  )
}

export default MyPosts;