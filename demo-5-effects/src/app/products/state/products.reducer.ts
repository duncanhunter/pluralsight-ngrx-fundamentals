import { createReducer, on } from '@ngrx/store';
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
    products: [],
  })),
  on(ProductsAPIActions.productsLoadedSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(ProductsAPIActions.productsLoadedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(ProductsPageActions.addProduct, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(ProductsAPIActions.productAddedSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    products: [...state.products, product],
  })),
  on(ProductsAPIActions.productAddedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(ProductsPageActions.updateProduct, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(ProductsAPIActions.productUpdatedSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    products: state.products.map((existingProduct) =>
      existingProduct.id === product.id ? product : existingProduct
    ),
  })),
  on(ProductsAPIActions.productUpdatedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  })),
  on(ProductsPageActions.deleteProduct, (state) => ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(ProductsAPIActions.productDeletedSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    products: state.products.filter(
      (existingProduct) => existingProduct.id !== id
    ),
  })),
  on(ProductsAPIActions.productDeletedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message,
  }))
);
