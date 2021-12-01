const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
  dialogs: [
    {id: 1, name:'Anna'},
    {id: 2, name:'Liza'},
    {id: 3, name:'Luiz'},
    {id: 4, name:'Marsaskus'},
    {id: 5, name:'Dani'},
    {id: 6, name:'Viki'}
  ],
  messages: [
    {id: 1, message:'HI'},
    {id: 2, message:'How are you?'},
    {id: 3, message:'By'},
  ],
  newMessageText: '',
}

export const messagesReducer = (state = initialState, action) => {

  switch (action.type) {

    case UPDATE_NEW_MESSAGE_BODY : {

      return {
        ...state,
        newMessageText: action.newMessage
      }
    }

    case SEND_MESSAGE: {

      let id = state.messages.length + 1;
      let body = state.newMessageText
      let newMessage = {id: id, message: body}

      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage]
      }
    }

    default: 
    return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyActionCreator = (body) => 
  ({type: UPDATE_NEW_MESSAGE_BODY,  newMessage: body});