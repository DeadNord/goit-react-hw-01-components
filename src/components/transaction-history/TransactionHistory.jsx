import TransactionItem from "./TransactionHistoryItem";
import s from "./TransactionHistory.module.css"

export default function Stat({ transactions }) {
    return (
        <table className={s.transaction}>
  <thead className={s.header}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={s.history}>
      {transactions.map(transaction => (
              <TransactionItem
                        key = {transaction.id}
                        type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              />
                ))}
  </tbody>
</table>
    )
}