import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main>
        <ProfileInfo />
        <MyPosts postsData={props.state.postsData}/>
    </main>
  )
}

export default Profile;