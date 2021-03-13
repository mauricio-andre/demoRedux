import { all, takeLatest, select } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCart } from './action';

type CheckProductStockRequest = ReturnType<typeof addProductToCart>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuality: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });
}

export default all([takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)]);
