import s from './MessagesItem.module.css';

const MessagesItem = (props) => {
  return (
    <div className={s.item}>
      {props.message}
    </div>
  )
}

export default MessagesItem;