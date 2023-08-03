import React from "react";
import "./HeaderTitle.css";
import PropTypes from 'prop-types';

const HeaderTitle = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className="storybook-header">
      <h1>{primaryTitle}</h1>
      <div>{secondaryTitle}</div>
    </div>
  );
};

export default HeaderTitle;

HeaderTitle.propTypes = {
  primaryTitle: PropTypes.string,
  secondaryTitle: PropTypes.string,
};

HeaderTitle.defaultProps = {
  primaryTitle: "Hello",
  secondaryTitle: "World",
};