import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollectRefundContainer = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const CollectRefundButton = styled.button`
  width: 4rem;
  height: 4rem;
  color: #eee;
  border: 0;
  background-color: #333;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 1rem 0.25rem;
  &:hover {
    background-color: #000;
  }
`;

const CollectRefund = ({ onCollectCoinRefund, machineCoinsAmount }) => (
  <CollectRefundContainer>
    <CollectRefundButton
      onClick={() => onCollectCoinRefund(machineCoinsAmount)}
      type="button"
    >
      Collect Refund
    </CollectRefundButton>
  </CollectRefundContainer>
);

CollectRefund.propTypes = {
  onCollectCoinRefund: PropTypes.func.isRequired,
  machineCoinsAmount: PropTypes.number.isRequired,
};

export default CollectRefund;
