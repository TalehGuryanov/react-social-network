import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger;
  return (
    <main>
        <ProfileInfo />
        <MyPosts postsData={props.postsData}/>
    </main>
  )
}

export default Profile;