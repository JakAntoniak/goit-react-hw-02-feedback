import { Component } from 'react';
import { Statistics } from '../Statistics/Feedback-statistics';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/Buttons';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    if (e.target.textContent === 'Good') {
      this.setState({
        good: this.state.good + 1,
      });
    } else if (e.target.textContent === 'Neutral') {
      this.setState({
        neutral: this.state.neutral + 1,
      });
    } else if (e.target.textContent === 'Bad') {
      this.setState({
        bad: this.state.bad + 1,
      });
    } else {
      alert('Something went wrong!');
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const positivePercentage = Math.ceil((good / total) * 100);
    return positivePercentage ? positivePercentage : '-%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
