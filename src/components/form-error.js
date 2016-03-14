import React from 'react';
import classNames from 'classnames';

const FormError = ({ children, isVisible, ...props}) => {
  const formErrorClasses = classNames('bold', 'black', { 'hide': !isVisible });

  return (
    <div className={ formErrorClasses } {...props}>
      { children }
    </div>
  );
};

FormError.propTypes = {
  children: React.PropTypes.node,
  isVisible: React.PropTypes.bool,
  id: React.PropTypes.string,
};

export default FormError;
