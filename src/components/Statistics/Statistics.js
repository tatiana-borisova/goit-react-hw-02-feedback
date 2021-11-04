import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Counters from '../Counters';
import Notification from '../Notification';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  incrementValue(feedbackKey) {
    this.setState(prevState => ({ [feedbackKey]: prevState[feedbackKey] + 1 }));
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100) + '%';
  }

  render() {
    return (
      <div className="statistics">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodClick={this.incrementValue.bind(this, 'good')}
            onNeutralClick={this.incrementValue.bind(this, 'neutral')}
            onBadClick={this.incrementValue.bind(this, 'bad')}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="No feedback given" />
          ) : (
            <Counters
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Statistics;
