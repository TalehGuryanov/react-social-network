import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
   return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateNewMessageBody: (body) => dispatch(updateNewMessageBodyActionCreator(body))
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;