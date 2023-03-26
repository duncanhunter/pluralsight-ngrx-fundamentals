import { getRouterSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sumProducts } from 'src/app/utils/sum-products';
import { ProductsState } from './products.reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectProductsShowProductCode = createSelector(
  selectProductsState,
  ({ showProductCode }) => showProductCode
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  ({ loading }) => loading
);

export const selectProducts = createSelector(
  selectProductsState,
  ({ products }) => products
);

export const selectProductsErrorMessage = createSelector(
  selectProductsState,
  ({ errorMessage }) => errorMessage
);

export const selectProductsTotal = createSelector(selectProducts, sumProducts);

export const { selectRouteParams } = getRouterSelectors();

export const selectProductById = createSelector(
  selectRouteParams,
  selectProductsState,
  ({ id }, { products }) =>
    products.find((product) => product.id === parseInt(id))
);
