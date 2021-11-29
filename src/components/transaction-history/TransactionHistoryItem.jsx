import s from "./TransactionHistory.module.css"

export default function FriendListItem({ type, amount, currency }) {
  return (
      <tr className={s.item}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
    )
}