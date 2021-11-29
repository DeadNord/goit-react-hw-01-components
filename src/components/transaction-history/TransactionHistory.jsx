import TransactionItem from "./TransactionHistoryItem";
import s from "./TransactionHistory.module.css"
import PropTypes from "prop-types"


export default function TransactionHistory({ transactions }) {
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

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
}