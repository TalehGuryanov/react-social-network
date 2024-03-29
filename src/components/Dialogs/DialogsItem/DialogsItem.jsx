import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

const DialogsItem = (props) => {

  let path = '/dialogs/' + props.id

  return (
    <div className={s.item}>
        <NavLink to={path} className={s.link} activeClassName={s.active}>
          {props.name}
        </NavLink>
    </div>
  )
}

export default DialogsItem;