import s from'./FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
    <li className={s.item}>
      <div className={s.img}>
        <img src={props.img} alt="#"/>
      </div>
      <div className={s.name}>
        {props.name}
      </div>
    </li>
  )
}

export default FriendsItem;