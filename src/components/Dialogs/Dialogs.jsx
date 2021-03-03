import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import MessagesItem from './MessagesItem/MessagesItem';

const Dialogs = (props) => {
  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        <DialogsItem link='1' name='Anna'/>
        <DialogsItem link='2' name='Liza'/>
        <DialogsItem link='3' name='Luiz'/>
        <DialogsItem link='4' name='Markus'/>
        <DialogsItem link='5' name='Dani'/>
        <DialogsItem link='6' name='Viki'/>
      </div>
      <div className={s.messages}>
        <MessagesItem message='HI'/>
        <MessagesItem message='How are you?'/>
        <MessagesItem message='By'/>
      </div>
    </div>

  )
}

export default Dialogs;