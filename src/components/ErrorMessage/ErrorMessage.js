import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  position: absolute;
  background-color: #eee;
  border: 1px solid #c50d1a;
  border-radius: 0.25rem;
  color: #c50d1a;
  left: 50%;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  padding: 1rem;
  transform: translateX(-50%);
`;

const ErrorMessage = ({ errorMessage }) =>
  errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>;

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorMessage;
