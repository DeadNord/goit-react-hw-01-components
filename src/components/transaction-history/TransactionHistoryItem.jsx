import s from "./TransactionHistory.module.css"
import PropTypes from "prop-types"

export default function TransactionItem({ type, amount, currency }) {
  return (
      <tr className={s.item}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
    )
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}