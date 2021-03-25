import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/messagesReducer'
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer> 
      {
        (store) => {
          let state = store.getState().messagesPage;

          let sendMessageClick = () => {
            store.dispatch(sendMessageActionCreator())
          }

          let newMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyActionCreator(body));
          }

          return <Dialogs
            sendMessage={sendMessageClick}
            updateNewMessageBody={newMessageChange}
            messagesPage={state}
          />
        }
      }

    </StoreContext.Consumer>

  )
}

export default DialogsContainer;