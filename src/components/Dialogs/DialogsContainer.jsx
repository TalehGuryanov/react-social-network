import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let state = props.store.getState().messagesPage;

  let sendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator())
  }

  let newMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }

  return (<Dialogs 
    sendMessage={sendMessageClick}
    updateNewMessageBody={newMessageChange}
    messagesPage={state}
  />)
}

export default DialogsContainer;