const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export const messagesReducer = (state, action) => {

  switch (action.type) {

    case SEND_MESSAGE:

      let id = state.messages.length + 1;
    
      let newMessage = {
        id: id,
        message: state.newMessageText,
      };

      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    
    case UPDATE_NEW_MESSAGE_BODY :
      
      state.newMessageText = action.newMessage
      return state;

    default: 
    return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyActionCreator = (body) => 
  ({type: UPDATE_NEW_MESSAGE_BODY,  newMessage: body});