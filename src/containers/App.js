import React from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  insertCoin as insertCoinAction,
  setIsDraggingCoin as setIsDraggingCoinAction,
  setIsCoinDropZone as setIsCoinDropZoneAction,
  setCoinError as setCoinErrorAction,
  updateInsertedCoinAmount as updateInsertedCoinAmountAction,
} from 'actions/coin';
import {
  selectProduct as selectProductAction,
  updateProductStock as updateProductStockAction,
  collectProduct as collectProductAction,
} from 'actions/product';

import { Header, VendingMachine, Wallet } from 'components';
import coins from 'data/coins';

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 38rem;
  padding: 0.5rem;

  @media (min-width: 768px) {
    max-width: 44rem;
  }
  @media (min-width: 1024px) {
    max-width: 52rem;
  }
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const CoinErrorContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #c50d1a;
  background-color: #eee;
  border: 1px solid #c50d1a;
  border-radius: 0.25rem;
  padding: 1rem;
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;

class App extends React.Component {
  onDrop = (e) => {
    const { walletAmount, insertCoin, setCoinError } = this.props;
    e.preventDefault();
    const value = e.dataTransfer.getData('transfer');
    if (walletAmount > 0 && value <= walletAmount) {
      insertCoin(value);
    } else if (value > walletAmount && walletAmount > 0) {
      setCoinError(
        `You don't have enough cash to insert that coin. Try again.`,
      );
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
    e.dataTransfer.setData('transfer', e.currentTarget.textContent);
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
      insertedCoinsAmount,
      setCoinError,
      updateProductStock,
      products,
      updateInsertedCoinAmount,
    } = this.props;

    const selectedProductPrice = products.find((p) => p.id === id).price;
    const selectedProductStock = products.find((p) => p.id === id).currentStock;

    if (
      insertedCoinsAmount > 0 &&
      selectedProductPrice <= insertedCoinsAmount &&
      selectedProductStock > 0
    ) {
      selectProduct(name, img);
      updateProductStock(id, 1);
      updateInsertedCoinAmount(insertedCoinsAmount - selectedProductPrice);
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
      walletAmount,
      insertedCoinsAmount,
      isDragging,
      isDropZone,
      coinError,
      selectedProductName,
      selectedProductImg,
      products,
      collectProduct,
      isCollected,
    } = this.props;

    return (
      <AppContainer>
        {coinError && <CoinErrorContainer>{coinError}</CoinErrorContainer>}
        <Header />
        <MainContainer>
          <VendingMachine
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
            onDragEnter={this.onDragEnter}
            onDragLeave={this.onDragLeave}
            isDropZone={isDropZone}
            insertedCoinsAmount={insertedCoinsAmount}
            products={products}
            onSelectProduct={this.onSelectProduct}
            selectedProductName={selectedProductName}
            selectedProductImg={selectedProductImg}
            onCollectProduct={collectProduct}
            isCollected={isCollected}
          />
          <Wallet
            coins={coins}
            walletAmount={walletAmount}
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            onDragOver={this.noAllowDrop}
            isDragging={isDragging}
            coinError={coinError}
          />
        </MainContainer>
      </AppContainer>
    );
  }
}

App.propTypes = {
  insertCoin: PropTypes.func.isRequired,
  insertedCoinsAmount: PropTypes.number.isRequired,
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
      stockCapacity: PropTypes.number,
    }),
  ).isRequired,
  updateInsertedCoinAmount: PropTypes.func.isRequired,
  collectProduct: PropTypes.func.isRequired,
  isCollected: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  walletAmount: state.coin.walletAmount,
  insertedCoinsAmount: state.coin.insertedCoinsAmount,
  isDragging: state.coin.isDragging,
  isDropZone: state.coin.isDropZone,
  coinError: state.coin.coinError,
  selectedProductName: state.product.selectedProductName,
  selectedProductImg: state.product.selectedProductImg,
  products: state.product.products,
  isCollected: state.product.isCollected,
});

const mapDispatchToProps = {
  insertCoin: insertCoinAction,
  setIsDraggingCoin: setIsDraggingCoinAction,
  setIsCoinDropZone: setIsCoinDropZoneAction,
  setCoinError: setCoinErrorAction,
  selectProduct: selectProductAction,
  updateProductStock: updateProductStockAction,
  updateInsertedCoinAmount: updateInsertedCoinAmountAction,
  collectProduct: collectProductAction,
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
