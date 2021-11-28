import TransactionItem from "./TransactionHistoryItem";

export default function Stat({ transactions }) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      {transactions.map(transaction => (
              <TransactionItem
                        key = {transaction.id}
                        type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              />
                ))}
    </tr>
  </tbody>
</table>
    )
}