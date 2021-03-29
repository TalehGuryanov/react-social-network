import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/ava.png'

class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resposne => {
      this.props.setUsers(resposne.data.items)
    })
  }

  render() {
    return (
      <div className={s.wrapper}>
        {
          this.props.users.map(user => <div key={user.id} className={s.user}>
            <div className={s.action}>
              <div className={s.img}>
                <img
                  src={user.photos.large != null ? user.photos.large :
                    userPhoto}
                  alt="avatar" />
              </div>
              <div>
                {
                  user.followed ?
                    <button onClick={() => { this.props.unfollow(user.id) }}>
                      Unfollow
                    </button> :
                    <button onClick={() => { this.props.follow(user.id) }}>
                      Follow
                    </button>
                }
              </div>
            </div>
            <div className={s.info}>
              <div>
                <div>{user.name}</div>
                <div>{user.status != null ? user.status : 'Good Morning'}</div>
              </div>
              <div>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
              </div>
            </div>
          </div>
          )
        }
      </div>
    )
  }
}

export default Users;