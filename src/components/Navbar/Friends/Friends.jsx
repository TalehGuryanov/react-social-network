import s from'./Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {

  console.log(props)

  let friendsItem = props.friends
    .map(item => <FriendsItem name={item.name} img={item.img}/>)

  return (
    <div>
      <div className={s.title}>
        Friends
      </div>
      <ul className={s.friends}>
          {friendsItem}
      </ul>
    </div>
  )
}

export default Friends;