import s from './FriendList.module.css'

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