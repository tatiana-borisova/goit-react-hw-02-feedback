import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import ResetParameters from './components/ResetParameters';

class App extends Component {
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

  onLeaveFeedback = feedbackKey => {
    this.setState(prevState => ({ [feedbackKey]: prevState[feedbackKey] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return this.countTotalFeedback()
      ? Math.floor((good / this.countTotalFeedback()) * 100)
      : 0;
  };

  resetParameters = () => {
    this.setState({ good: 0, neutral: 0, bad: 0 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="statistics">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="No feedback given" />
          ) : (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
              <ResetParameters reset={this.resetParameters} />
            </>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
