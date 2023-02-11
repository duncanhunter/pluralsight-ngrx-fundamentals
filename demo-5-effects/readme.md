# NgRx Fundamentals - Demo 3 Loading Data

## Steps

0. remove service from component and show not working
1. npm install package 
2. register effects in feature module
3. Create `products.effects.ts`
4. Make effect

```ts
```

5. handle exceptions
- add catchError
- add reducer on and update load
6. add other effects and actions (we will update them in the product page component soon). Discuss race conditions
mention clear state 

summary
we looked at side effect, exception handling
next we look at manging router state with router store
----- 
update edit
introduce the edit page and get state with id
router store
navigate in effect on get
where to initialise state ok for us as we manage the updates
