import Profile from './components/profile/Profile';
import user from './components/user.json';
// import './profile.module.css';

export default function App() {
  return (
    <div>
      <Profile
        url={user.avatar}
        userName={user.username}
        userTag={user.tag}
        locate={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
