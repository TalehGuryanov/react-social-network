import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';

const Dialogs = (props) => {

  let dialogsElem = props.state.dialogs
    .map(item => <DialogsItem id={item.id} name={item.name}/>)

  let messagesElem = props.state.messages
    .map(item => <MessagesItem id={item.id} message={item.message}/>)

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        {dialogsElem}
      </div>
      <div className={s.messages}>
        {messagesElem}
      </div>
    </div>

  )
}

export default Dialogs;