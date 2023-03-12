import { createAction, createReducer, on } from '@ngrx/store';

export interface ProductsState {
  showProductCode: boolean;
}

const intitialState: ProductsState = {
  showProductCode: true,
};

export const productsReducer = createReducer(
  intitialState,
  on(createAction('[Products Page] Toggle Show Product Code'), (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  }))
);
