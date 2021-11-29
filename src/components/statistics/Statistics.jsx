import StatisticsItem from "./StatisticsItem";
import s from './Statistics.module.css'

export default function Statistics({ stats }) {
    return (
        <section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>

  <ul className={s.stats}>
                {stats.map(statsEl => (
                        <StatisticsItem
                        key={statsEl.id}
                        label={statsEl.label}
                        percentage={statsEl.percentage}
                    />
                ))}
  </ul>
</section>
    )
}