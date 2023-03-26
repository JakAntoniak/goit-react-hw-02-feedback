import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/Buttons';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import Statistics from '../Statistics/Feedback-statistics';
import css from '../FeedbackApp/Style.module.css';
import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    if (e.target.textContent === 'Good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (e.target.textContent === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
    if (e.target.textContent === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div className={css.container}>
        <Section title="Please leave feedback" />
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Section title="Statistics" />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} />
        )}
      </div>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
