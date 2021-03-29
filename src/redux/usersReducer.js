const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1, 
      fullName:'Anna', 
      status:'I am a boss', 
      location: {
        city: 'Minsk', 
        country: 'Belarus'
      }, 
      img: 'https://www.pinclipart.com/picdir/middle/257-2575057_slime-icons-clipart.png',
      followed: true
    },
    {
      id: 2, 
      fullName:'Liza', 
      status:'Nice day', 
      location: {
        city: 'Moskow', 
        country: 'Russia'
      }, 
      img: 'https://www.pinclipart.com/picdir/middle/257-2575057_slime-icons-clipart.png',
      followed: true
    },
    {
      id: 3, 
      fullName:'Luiz', 
      status:'DDD', 
      location: {
        city: 'Paris', 
        country: 'France'
      }, 
      img: 'https://www.pinclipart.com/picdir/middle/257-2575057_slime-icons-clipart.png',
      followed: false
    },
    {
      id: 4, 
      fullName:'Markus', 
      status:'I like soccer', 
      location: {
        city: 'New York', 
        country: 'USA'
      }, 
      img: 'https://www.pinclipart.com/picdir/middle/257-2575057_slime-icons-clipart.png',
      followed: false
    },
  ],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        }),
      }
    
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    
    case SET_USERS:
      return {...state, user: [...state.users, ...action.users]}

    default: 
    return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unFollowAC = (userId) => 
  ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users})