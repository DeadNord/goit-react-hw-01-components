import PropTypes from "prop-types"

export default function Profile({ url, userName, userTag, locate, followers, views, likes }) {
    return (
        <div class="profile">
  <div class="description">
    <img
      src={url}
      alt={userName}
      class="avatar"
    />
    <p class="name">{userName}</p>
    <p class="tag">@{userTag}</p>
    <p class="location">{locate}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
  url: PropTypes.string,
  userName: PropTypes.string,
  userTag: PropTypes.string,
  locate: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}