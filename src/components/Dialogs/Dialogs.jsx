import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';

const Dialogs = (props) => {

  let state = props.messagesPage;

  let dialogsElem = state.dialogs
    .map(item => <DialogsItem id={item.id} name={item.name}/>)

  let messagesElem = state.messages
    .map(item => <MessagesItem id={item.id} message={item.message}/>)

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        {dialogsElem}
      </div>
      <div className={s.messages}>
        <div className={s.old}>
          {messagesElem}
        </div>
        <div className={s.new}>
          <textarea 
          onChange={onNewMessageChange}
            placeholder="add message"
            value={state.newMessageText}
          >
          </textarea>
          <button type="button" onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>

  )
}

export default Dialogs;