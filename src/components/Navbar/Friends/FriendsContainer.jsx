import StoreContext from '../../../StoreContext';
import Friends from './Friends';

const FriendsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().sidebar;
          console.log(state)

          return <Friends friends={state.friends}/>
        }
      }
    </StoreContext.Consumer>
  )
}

export default FriendsContainer;