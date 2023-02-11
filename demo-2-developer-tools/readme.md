# NgRx Fundamentals - Demo 2 Developer Tools

## Steps

1. Install NgRx Store `npm i @ngrx/store-devtools`
2. Register the devtools

```
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
```
3. Go to browser and install extension but open in devtools
4. Go through features
- init and actions
- lazy load review
- time travel and disable and show
- init actions

