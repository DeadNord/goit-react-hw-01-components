import s from './Statistics.module.css'

export default function Statistics({ label, percentage }) {
  return (
      <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
      </li>
    )
}