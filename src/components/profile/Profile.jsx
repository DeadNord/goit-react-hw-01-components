import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({
  url,
  userName,
  userTag,
  locate,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.card}>
      <div className={s.description}>
        <img src={url} alt={userName} className={s.avatar} />
        <p className={s.name}>{userName}</p>
        <p className={s.tag}>@{userTag}</p>
        <p className={s.location}>{locate}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  url: PropTypes.string,
  userName: PropTypes.string,
  userTag: PropTypes.string,
  locate: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
