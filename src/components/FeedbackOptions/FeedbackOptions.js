import PropTypes from 'prop-types';
import React from 'react';
import s from './FeedbackOptions.module.css';
import colorMaker from '../../js/colorMaker';

const btnStyle = { backgroundColor: colorMaker() };

const FeedbackOptions = ({ onGoodClick, onNeutralClick, onBadClick }) => (
  <div className={s.buttons}>
    <button
      className={s.button}
      type="button"
      onClick={onGoodClick}
      style={btnStyle}
    >
      Good
    </button>
    <button
      className={s.button}
      type="button"
      onClick={onNeutralClick}
      style={btnStyle}
    >
      Neutral
    </button>
    <button
      className={s.button}
      type="button"
      onClick={onBadClick}
      style={btnStyle}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onGoodClick: PropTypes.func.isRequired,
  onNeutralClick: PropTypes.func.isRequired,
  onBadClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
