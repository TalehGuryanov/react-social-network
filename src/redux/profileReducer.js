const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    {id: 1, message:'HI', likesCount: 15},
    {id: 2, message:'my first post', likesCount: 50},
    {id: 3, message:'my second post', likesCount: 23},
  ],
  newPostText: '',
}

export const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:

      if(state.newPostText === '' ) {
        alert('Введите текст');

      } else {
        
        let id = state.postsData.length + 1;
        let newPost = {
          id: id,
          message: state.newPostText,
          likesCount: 0
        };
  
        state.postsData.unshift(newPost);
        state.newPostText = '';
      }

      return state;
    
    case UPDATE_NEW_POST_TEXT:
      
      state.newPostText = action.newText
      return state;
    
    default: 
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT,  newText: text});