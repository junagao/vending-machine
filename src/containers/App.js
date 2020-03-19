import React from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as coinActions from 'actions/coin';
import * as productActions from 'actions/product';

import {
  Header,
  VendingMachine,
  Wallet,
  AdminControllers,
  ErrorMessage,
} from 'components';

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 53rem;
  margin-top: 1rem;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const UserControls = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  componentDidMount() {
    const { getCoins, getProducts } = this.props;
    getCoins();
    getProducts();
  }

  onDrop = (e) => {
    const { walletAmount, insertCoin, setCoinError, coins } = this.props;
    e.preventDefault();
    const coinValue = e.dataTransfer.getData('transfer value');
    const coinId = e.dataTransfer.getData('transfer coin id');
    const coinQuantity = coins.find((c) => coinId === c.id).userQuantity;
    if (walletAmount > 0 && coinValue <= walletAmount && coinQuantity > 0) {
      insertCoin(coinId, coinValue);
    } else if (walletAmount > 0 && coinQuantity === 0) {
      setCoinError(`You don't have enough of that coin. Try another.`);
      setTimeout(() => setCoinError(''), 2500);
    } else {
      setCoinError(`There is no money in your wallet. Withdraw some cash.`);
      setTimeout(() => setCoinError(''), 2500);
    }
  };

  onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  onDragStart = (e) => {
    const { setIsDraggingCoin } = this.props;
    e.dataTransfer.setData(
      'transfer value',
      e.currentTarget.getAttribute('value'),
    );
    e.dataTransfer.setData('transfer coin id', e.currentTarget.id);
    e.dataTransfer.dropEffect = 'move';
    setIsDraggingCoin();
  };

  onDragEnd = () => {
    const { setIsDraggingCoin } = this.props;
    setIsDraggingCoin();
  };

  onDragEnter = () => {
    const { setIsCoinDropZone } = this.props;
    setIsCoinDropZone();
  };

  onDragLeave = () => {
    const { setIsCoinDropZone } = this.props;
    setIsCoinDropZone();
  };

  noAllowDrop = (e) => {
    e.stopPropagation();
  };

  onSelectProduct = (name, img, id) => {
    const {
      selectProduct,
      machineCoinsAmount,
      setCoinError,
      updateProductStock,
      products,
      updateInsertedCoinAmount,
      setIsProductCollected,
    } = this.props;

    const selectedProductPrice = products.find((p) => p.id === id).price;
    const selectedProductStock = products.find((p) => p.id === id).currentStock;

    if (
      machineCoinsAmount > 0 &&
      selectedProductPrice <= machineCoinsAmount &&
      selectedProductStock > 0
    ) {
      selectProduct(name, img);
      updateProductStock(id, 1);
      updateInsertedCoinAmount(machineCoinsAmount - selectedProductPrice);
      setIsProductCollected(false);
    } else if (selectedProductStock === 0) {
      setCoinError(`Out of stock`);
      setTimeout(() => setCoinError(''), 2500);
    } else {
      setCoinError(`Not enough deposited. Price is ${selectedProductPrice} €.`);
      setTimeout(() => setCoinError(''), 2500);
    }
  };

  render() {
    const {
      coins,
      walletAmount,
      machineCoinsAmount,
      isDragging,
      isDropZone,
      coinError,
      selectedProductName,
      selectedProductImg,
      products,
      isCollected,
      collectProduct,
      collectCoinRefund,
      refillCoinsQuantity,
      refillProductStock,
    } = this.props;

    return (
      <AppContainer>
        {coinError && <ErrorMessage errorMessage={coinError} />}
        <Header text="Vending Machine" fontSize="h1" />
        <Main>
          <VendingMachine
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            isDropZone={isDropZone}
            machineCoinsAmount={machineCoinsAmount}
            products={products}
            onSelectProduct={this.onSelectProduct}
            selectedProductName={selectedProductName}
            selectedProductImg={selectedProductImg}
            onCollectProduct={collectProduct}
            isCollected={isCollected}
            onCollectCoinRefund={collectCoinRefund}
          />
          <UserControls>
            <Header text="User" />
            <Wallet
              walletAmount={walletAmount}
              coins={coins}
              onDragStart={this.onDragStart}
              onDragEnd={this.onDragEnd}
              onDragOver={this.noAllowDrop}
              isDragging={isDragging}
            />
            <Header text="Machine Admin" />
            <AdminControllers
              coins={coins}
              onRefillCoinsQuantity={refillCoinsQuantity}
              products={products}
              onRefillProductStock={refillProductStock}
            />
          </UserControls>
        </Main>
      </AppContainer>
    );
  }
}

App.propTypes = {
  getCoins: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
      userQuantity: PropTypes.number,
      machineQuantity: PropTypes.number,
    }),
  ).isRequired,
  insertCoin: PropTypes.func.isRequired,
  machineCoinsAmount: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  isDropZone: PropTypes.bool.isRequired,
  walletAmount: PropTypes.number.isRequired,
  setIsDraggingCoin: PropTypes.func.isRequired,
  setIsCoinDropZone: PropTypes.func.isRequired,
  setCoinError: PropTypes.func.isRequired,
  coinError: PropTypes.string.isRequired,
  selectProduct: PropTypes.func.isRequired,
  selectedProductName: PropTypes.string.isRequired,
  selectedProductImg: PropTypes.string.isRequired,
  updateProductStock: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      currentStock: PropTypes.number,
    }),
  ).isRequired,
  updateInsertedCoinAmount: PropTypes.func.isRequired,
  collectProduct: PropTypes.func.isRequired,
  isCollected: PropTypes.bool.isRequired,
  setIsProductCollected: PropTypes.func.isRequired,
  collectCoinRefund: PropTypes.func.isRequired,
  refillCoinsQuantity: PropTypes.func.isRequired,
  refillProductStock: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.coin.coins,
  walletAmount: state.coin.walletAmount,
  machineCoinsAmount: state.coin.machineCoinsAmount,
  isDragging: state.coin.isDragging,
  isDropZone: state.coin.isDropZone,
  coinError: state.coin.coinError,
  products: state.product.products,
  selectedProductName: state.product.selectedProductName,
  selectedProductImg: state.product.selectedProductImg,
  isCollected: state.product.isCollected,
});

const mapDispatchToProps = {
  ...coinActions,
  ...productActions,
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
