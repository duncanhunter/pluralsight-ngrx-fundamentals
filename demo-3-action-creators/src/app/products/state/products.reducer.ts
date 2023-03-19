import { createReducer, on } from '@ngrx/store';
import { Product } from '../product.model';
import { ProductsAPIActions, ProductsPageActions } from './products.actions';

export interface ProductsState {
  showProductCode: boolean;
  loading: boolean;
  products: Product[];
}

const initalState: ProductsState = {
  showProductCode: true,
  loading: false,
  products: [],
};

export const productsReducer = createReducer(
  initalState,
  on(ProductsPageActions.toggleShowProductCode, (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  })),
  on(ProductsPageActions.loadProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(ProductsAPIActions.productsLoadedSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  }))
);
