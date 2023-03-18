# NgRx Fundamentals - Demo 3 Action Creators

## Steps

1. Create `products.actions.ts`
2. Add 

```ts
export const ProductPageActions = createActionGroup({
  source: '[Products Page]',
  events: {
    'Load Products': emptyProps(),
  },
});

export const ProductsAPIActions = createActionGroup({
  source: '[Products API]',
  events: {
    'Products Loaded Success': props<{ products: ReadonlyArray<Product> }>(),
    'Products Loaded Fail': props<{ message: string }>(),
  },
}); 
```

3. Update 
`products-page.ts` and `products.reducer.ts` to use new shared actions.
4. Add update reducer state and actions
- discuss load needs to be reset best here versus jumping around later

