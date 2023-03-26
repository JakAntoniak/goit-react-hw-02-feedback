import css from '../Statistics/Style.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = good + neutral + bad,
  positivePercentage,
}) => {
  const CountTotalFeedback = ({ total }) => {
    return total;
  };

  const CountPositiveFeedbackPercentage = () => {
    const percent = Math.round((good / total) * 100);
    if (total === 0) {
      return ' - %';
    }
    return ' ' + percent + '%';
  };

  return (
    <div className={css.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {<CountTotalFeedback total={total} />}</p>
      <p>
        Positive Feedback:
        {
          <CountPositiveFeedbackPercentage
            positivePercentage={positivePercentage}
          />
        }
      </p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
