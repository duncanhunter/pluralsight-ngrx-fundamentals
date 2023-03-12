import { createAction, createReducer, on } from '@ngrx/store';
import { Product } from '../product.model';
import { ProductsAPIActions, ProductsPageActions } from './products.actions';

export interface ProductsState {
  showProductCode: boolean;
  loading: boolean;
  errorMessage: string;
  products: Product[];
}

const intitialState: ProductsState = {
  showProductCode: true,
  loading: false,
  errorMessage: '',
  products: [],
};

export const productsReducer = createReducer(
  intitialState,
  on(ProductsPageActions.toggleShowProductCode, (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  })),
  on(ProductsPageActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
    products: []
  })),
  on(ProductsAPIActions.productsLoadedSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  }))
);
