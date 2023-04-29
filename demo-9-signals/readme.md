# NgRx Fundamentals - Demo 7 entity adapter

## Steps

0. intro
- In previous modules we needed to loop over products to update, delete and select a product. Delaing with collections of entities can be easier if we store them as a dictionary or map of key value pairs.
This can make getting and setting an individual entity mich easier and performant but also easier to write selectors.

1. let npm i  `@ngrx/entity` nothing to register
2. use it in out reducer
- create state, adapter and intital state
- update broken reducer and effect Update

```ts
map(() =>
    ProductsAPIActions.productUpdatedSuccess({
        update: { id: product.id, changes: product },
    }))
```

3. update our selectors
- try update selector and no array any more
- go export adapter selctors

```ts
const { selectAll, selectEntities } = adapter.getSelectors();

export const productSelectors = {
  selectAllProducts: selectAll,
  selectEntities: selectEntities,
};
```

- make new selector with them by feeding in product state

```ts
export const selectProducts = createSelector(
  selectProductsState,
  productSelectors.selectAllProducts
);

export const selectProductEntities = createSelector(
  selectProductsState,
  productSelectors.selectEntities
);

// ---------

export const selectProductById = createSelector(
  selectRouteParams,
  selectProductEntities,
  ({ id }, entities) => entities[id]
);

```