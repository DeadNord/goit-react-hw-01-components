import s from './FriendList.module.css'
import PropTypes from "prop-types"


export default function FriendListItem({ avatar, name, isOnline }) {
  const state = isOnline ? 'online' : 'offline';
  
  return (
      <li className={s.item}>
       <span className={s[state]}></span>
       <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
      </li>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}