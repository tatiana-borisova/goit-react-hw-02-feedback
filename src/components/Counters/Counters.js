import PropTypes from 'prop-types';
import React from 'react';
import s from './Counters.module.css';

const Counters = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.counters}>
    <span className={s.counter}>Good: {good}</span>
    <span className={s.counter}>Neutral: {neutral}</span>
    <span className={s.counter}>Bad: {bad}</span>
    <span className={s.counter}>Total: {total}</span>
    <span className={s.counter}>Positive feedback: {positivePercentage}</span>
  </div>
);

Counters.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Counters;
