import React from 'react';

import CoinSlot from 'components/CoinSlot';
import VendingMachineScreen from 'components/VendingMachineScreen';
import CollectProductButton from 'components/CollectProductButton';

const VendingMachine = () => (
  <div>
    <h1>VendingMachine</h1>
    <CoinSlot />
    <VendingMachineScreen />
    <CollectProductButton />
  </div>
);

export default VendingMachine;
