import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.img}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGuyFqUEpzj0Otv1GSzYgUCrk-gdT8Qje5Q&usqp=CAU" alt="user-img"/>
      </div>
      <div className={s.text}>
        {props.message}
      </div>
      <div className={s.like}>
        like {props.likesCount}
      </div>
    </div>
  )
}

export default Post;