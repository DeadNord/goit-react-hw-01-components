import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

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
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
