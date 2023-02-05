# NgRx Fundamentals - Demo 1 First Look

## Steps

1. Install NgRx Store `npm i @ngrx/store`
2. Register the root and feature state modules
3. Subscribe to the store in products-page.component.ts and console log the store. Run the app and view the logged store state.
4. Disable existing toggleShowProductCode logic in the component and dispatch an action `{type: '[Products Page] Toggle Show Product Code}'`
5. Create `state/products.reducer.ts` and create state interface, initial state and first reducer.
6. Go back to the running app in the browser and see the initial state from our reducer is not showing because we need to register the reducer. Go to the products module and register the `productsReducer`. Now back in the broswer we see the default state.
7. Update the component to use an obersvable of the inlined state selection and change to use an async pipe.
8. Demonstrate it working as navigate in and out of the products-page route. Also log the store in the home page to show how the state builds up feature state.
9. Next lets install some better tools to debug and visualize all this state and changes to it.
10. remove console logs
