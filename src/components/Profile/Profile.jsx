import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main>
        <ProfileInfo />
        <MyPosts 
          postsData={props.profilePage.postsData}
          newPostText={props.profilePage.newPostText}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
    </main>
  )
}

export default Profile;