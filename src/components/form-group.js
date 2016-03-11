import React from 'react';

const FormGroup = ({ children }) => (
  <div className="py2">
    { children }
  </div>
);

FormGroup.propTypes = {
  children: React.PropTypes.node,
};

export default FormGroup;
