import PropTypes from 'prop-types';
import css from '../FeedbackOptions/Style.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <section className={css['button-section']}>
      <button className={css.button} onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={css.button} onClick={onLeaveFeedback}>
        Bad
      </button>
    </section>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
