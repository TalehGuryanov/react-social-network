import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

const DialogsItem = (props) => {

  let link = '/dialogs/' + props.id

  return (
    <div className={s.item}>
        <NavLink to={props.link} className={s.link} activeClassName={s.active}>
          {props.name}
        </NavLink>
    </div>
  )
}

export default DialogsItem;