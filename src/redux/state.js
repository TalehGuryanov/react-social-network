let store ={

  _state : {
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
  },

  getState() {
    return this._state
  },

  updateNewPostText (newtext) {
    this._state.profilePage.newPostText = newtext
    this._callSubscriber();
  },

  _callSubscriber() {
    console.log('state changed');
  },

  addPost() {

    if(this._state.profilePage.newPostText === '' ) {
      alert('Введите текст');
      return;
    }
  
    let id = this._state.profilePage.postsData.length + 1;
  
    let newPost = {
      id: id,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
  
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    
    this._callSubscriber();
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;

window.store = store