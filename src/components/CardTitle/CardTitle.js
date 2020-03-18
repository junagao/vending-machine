import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.15rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const CardTitle = ({ children }) => <Title>{children}</Title>;

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardTitle;
