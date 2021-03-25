import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main>
        <ProfileInfo />
        <MyPosts 
          postsData={props.store.getState().profilePage.postsData}
          newPostText={props.store.getState().profilePage.newPostText}
          dispatch={props.store.dispatch.bind(props.store)}
        />
    </main>
  )
}

export default Profile;