import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/ava.png'

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(resposne => {
      this.props.setUsers(resposne.data.items)
      this.props.setTotalUsersCount(resposne.data.totalCount)
      console.log(resposne.data.totalCount)
    })
  }

  onPageChanged = (pagenumber) => {
    this.props.setCurrentPage(pagenumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagenumber}&count=${this.props.pageSize}`).then(resposne => {
      this.props.setUsers(resposne.data.items)
    })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize / 100);

    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={s.wrapper}>
        <div>
          {pages.map( (p) => {
            return <span 
              key = {p.toString()}
              className={ this.props.currentPage === p ? s.selected_page: '' }
              onClick={ () => {this.onPageChanged(p)} }
              >
                {p} -
            </span>
          })}
        </div>
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