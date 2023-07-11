import PropTypes from 'prop-types';
import css from '../FeedbackOptions/Style.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const Options = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };

  return (
    <section className={css['button-section']}>
      <button className={css.button} onClick={onLeaveFeedback}>
        {Options.good}
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        {Options.neutral}
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        {Options.bad}
      </button>
    </section>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
