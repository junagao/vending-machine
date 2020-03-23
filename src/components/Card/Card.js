import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  height: min-content;
  background-color: #ddd;
  border-radius: 0.25rem;
  margin-bottom: ${({ lastCard }) => (lastCard ? `0rem` : '2rem')};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.p`
  color: #444;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 500;
  @media (min-width: 640px) {
    font-size: 1.15rem;
  }
`;

const CardSubtitle = styled.span`
  font-size: 1rem;
`;

const Card = ({ title, subtitle, children, lastCard }) => (
  <CardContainer lastCard={lastCard}>
    <CardTitle>
      {title} <CardSubtitle>{subtitle}</CardSubtitle>
    </CardTitle>
    {children}
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  lastCard: PropTypes.bool,
};

Card.defaultProps = {
  subtitle: '',
  lastCard: false,
};

export default Card;
