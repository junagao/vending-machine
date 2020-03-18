import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 22rem;
  height: min-content;
  background-color: #ddd;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const Card = ({ children }) => <CardContainer>{children}</CardContainer>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
