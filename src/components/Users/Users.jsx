import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

  return (
    <div className={s.wrapper}>
      {
        props.users.map(user => <div key={user.id} className={s.user}>
            <div className={s.action}>
              <div className={s.img}>
                <img src={user.img} alt="avatar"/>
              </div>
              <div>
                { 
                  user.followed ? 
                    <button onClick={() => {props.unfollow(user.id)}}> 
                      Unfollow 
                    </button> : 
                    <button onClick={() => {props.follow(user.id)}}> 
                      Follow 
                    </button>
                }
              </div>
            </div>
            <div className={s.info}>
              <div>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </div>
              <div>
                <div>{user.location.city}</div>
                <div>{user.location.country}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Users;