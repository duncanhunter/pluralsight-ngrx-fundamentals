# NgRx Fundamentals - Demo 6 Router Store

## Steps

0. intro
- bit simpler as we just use the obseravble from the service as is
- we have these methods in the component that talk to our service BUT what is interesting regarding state management is we have to handle getting the state of the url and manage navigating on successful updates etc.
In this module we will see again how we can remove the responsibility of talking to the service but also how to 
- improve performance by getting our product from the store
- first querying from the component then an alternate approach to use the router store to listen to the url in an effect removing the need for the component to know about the state of the url and it injected activated reouter and router dependency
- We will also stuble into a very common and faq about where to initalise state as we currently call our service to get the product to edit directly but when we change to get it from the store we will realsise that of we deep link intot he edit page without first going to the list page that dispatchs the load action our edit page will not find any products in the store to edit

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
5. lets use router store 

----- 
update edit
introduce the edit page and get state with id
router store
navigate in effect on get
where to initialise state ok for us as we manage the updates