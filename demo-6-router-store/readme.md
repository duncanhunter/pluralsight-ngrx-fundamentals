# NgRx Fundamentals - Demo 6 Router Store

## Steps

0. intro
- bit simpler as we just use the obseravble from the service as is
- we have these methods in the component that talk to our service BUT what is interesting regarding state management is we have to handle getting the state of the url and manage navigating on successful updates etc.
In this module we will see again how we can remove the responsibility of talking to the service but also how to 
- improve performance by getting our product from the store
- first querying from the component then an alternate approach to use the router store to listen to the url in an effect removing the need for the component to know about the state of the url and it injected activated reouter and router dependency
- We will also stumble into a very common and faq about where to initalise state as we currently call our service to get the product to edit directly but when we change to get it from the store we will realsise that of we deep link intot he edit page without first going to the list page that dispatchs the load action our edit page will not find any products in the store to edit

1. Lets review the edit logic
2. Lets wire up our get product with a selector that takes an arg
3. Lets change out the calls to the service to dispatch actions and remove the dependency
- need to add api load actions
4. Now we have an issue if we refresh the 
5. 
fix add by showing the issue
remove route deps and route in the effect 
add router to effect
update compon and update delete calls
6. lets use router store 
- npm i router store
- register in app module and its reducer
- add aselector

```ts
export const { selectRouteParams } = getRouterSelectors();

export const selectProductById = createSelector(
  selectRouteParams,
  selectProductsState,
  ({ id },{ products }) => products.find((product) => product.id === parseInt(id))
);

```
7. summary
- made selectProductById selector and passed along the id
- then we relased we broke the app needing to init of feature module
- then updated the rest of the crud actions and looked at routing in the effect
- then we used the router store and got the router state from composing selectors
- this really clean up the component