import FriendListItem from "./FriendListItem";
import s from './FriendList.module.css'
import PropTypes from "prop-types"


export default function FriendList({ friends }) {
    return (
        <ul className={s.friends}>
  {friends.map(friend => (
                    
          <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline ={friend.isOnline}
                    />
                ))}
</ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.array,
}