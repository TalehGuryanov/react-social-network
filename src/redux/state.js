let renderDom = null;

let state = {
  messagesPage: {
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
    ]
  },
  profilePage: {
    postsData: [
      {id: 1, message:'HI', likesCount: 15},
      {id: 2, message:'my first post', likesCount: 50},
      {id: 3, message:'my second post', likesCount: 23},
    ],
    newPostText: '',
  },
  sidebar: {
    friends: [
      {id: 1, name:'Liza', img:'https://image.freepik.com/free-photo/photo-positive-smiling-woman-with-broad-charming-smile-dressed-casually-recreats-home-feels-relaxed-comfortable_273609-3203.jpg'},
      {id: 2, name:'Anna', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cyJmaHCRi6B5iFadcd-v9HUxlhA-NA_Ueg&usqp=CAU'},
      {id: 3, name:'Viki', img: 'https://primadonnamagazine.com/wp-content/uploads/2017/08/wellness-smile-woman.jpg'}
    ]
  }
}

window.state = state

export const updateNewPostText = (newtext) => {
  state.profilePage.newPostText = newtext
  renderDom();
}

export const addPost = () => {

  if(state.profilePage.newPostText === '' ) {
    alert('Введите текст');
    return;
  }

  let id = state.profilePage.postsData.length + 1;

  let newPost = {
    id: id,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  
  renderDom();
}

export const subscribe = (observer) => {
  renderDom = observer;
}

export default state;