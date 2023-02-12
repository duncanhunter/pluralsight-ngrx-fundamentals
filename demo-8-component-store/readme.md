# NgRx Fundamentals - Demo 8 Component Store

## Steps

0. intro
- local state
- pattern dispatch actions, pure function = reducer, effects side effect
- component store cleans up, no actions
- jump in product list component 

1. install `@ngrrx/component-store`
2. new file `products.store.ts`
- code from scratch

```ts
export interface ProductsState {
  total: number;
  products: Product[];
}

@Injectable()
export class ProductsStore extends ComponentStore<ProductsState> {
  products$ = this.select((state) => state.products);
  total$ = this.select((state) => sumProducts(state.products));

  constructor(private productsService: ProductsService) {
    super({ products: [], total: 0 });
  }
```
3. update the products-page.components.ts
- remove ngrx store and inject componentStore and in provider
- hard code response for not implemented observables
4. discuss I would leave products in the global store as need it also on the edit page. I could provide it on the product module level but then it is more global than component and will stick with normal ngrx global store.