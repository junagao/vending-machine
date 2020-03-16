import React from 'react';
import { hot } from 'react-hot-loader/root';

import { VendingMachine, Wallet } from 'components';

const App = () => (
  <div>
    <VendingMachine />
    <Wallet />
  </div>
);

export default hot(App);
