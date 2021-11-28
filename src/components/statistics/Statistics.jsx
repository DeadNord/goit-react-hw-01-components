import StatisticsItem from "./StatisticsItem";

export default function Statistics({ stats }) {
    return (
        <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
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