## How to start project:
* npm run start

## requirement
- use some of  UI component libraries
- use state managment react context or redux 
- use some of the libraries for workin with forms ( React-hook-Form or Formic)
# Create Pages:
* Create components
  * Layout
  * Footer
  * Cart Badge ( count of product an price)
1) Home page : there will be displayed list of products
   * Product cards: each card should have image, price title, and category, add wishlist
     all cards will be clicable and after click on particular card we will be redirected
     on single product
   - create filters: by category, price rang
   - sorter: by price, by title asc & desc
   - autocomplete searh product by title

2) Single Product page: Detail of product
   This page should contain the folowing components :
    - title
    - description
    - Image
    - price
    - button add to wishlist
    - button add to cart ( with posibility to add quantity)
    - Category 
    - rating,
   * each section should be component which will be included
4) Cart page:
   table with chosen products:
    -  Title, price, quantity and subtotal, remove button
    - Checkout button which will redirect on checkout page
5) Checkout page:
    with checkout form and order review
6) Wishlist page;
     hint:save wishlist items into localStorage
3) Login Page:
   login form with email & password fields
   
# USEFUL RESOURCES:
   ###  REST API DATA
      * full fake REST API  - https://github.com/typicode/json-server
      * AXIOS HTTP Client for  - https://axios-http.com/docs/intro
      * react-query: Hooks for fetching, caching and updating asynchronous data -   https://www.npmjs.com/package/react-query

 ### UI Libraries
1) MATERIAL-UI https://mui.com/material-ui/getting-started/overview/
2) ANT DESIGN : https://ant.design/docs/react/introduce
3) REACT-BOOTSTRAP: https://react-bootstrap.github.io/getting-started/introduction
4) SEMANTIC UI : https://react.semantic-ui.com

### FORM VALIDATION:
* React-hook-Form: https://react-hook-form.com/
* FORMIK & YUP: https://formik.org , https://www.npmjs.com/package/yup
### REACT TYPESCRIPT:
 * typescript cheatsheet: https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

 ### IT'S GOOD TO READ BEFORE YOU START:
1) https://blog.webdevsimplified.com/2022-07/react-folder-structure/
2) https://andela.com/insights/structuring-your-react-application-atomic-design-principles/

  # BASIC PROJECT STURCTURE

```bash
|-src
|  |
|  |--assets
|     |---images  
|     |---fonts
|  |--components
|     |--Button # EXAMPLE
|          |--index.ts
|          |--Button.tsx
|          |--styles.module.css
|     |--CartBadge # EXAMPLE
|          |--index.ts
|          |--CartBadge.tsx
|          |--styles.module.css
|  |--context
|     |--cart  # EXAMPLE
|        |--CartContext.tsx
|        |--CartProvider.tsx
|        |--CartReducer.tsx

|  |--hooks
|     |--useCartHook.tsx
|     |--useProductsHook.ts
|  |--interfaces
|     |-index.ts
|  |--pages
|     |--home # EXAMPLE
|        |--Home.tsx
|        |--index.ts
|     |--about-us # EXAMPLE
|        |--AboutUs.tsx
|        |--index.ts
|     |--404
|        |--404.tsx
|        |--index.ts
|  |--services
|        |--base-http.service.ts
|        |--products.service.ts
|        |-...
|  |--utils
|        |--index.ts
|        |--classNames.ts
|        |--jwtDecoder.ts
|  |-- App.tsx
|  |-- index.tsx
|  |--.env
|  |--.env.production
|  |--.env.test
|  |--.gitignore
|  |--package.json
|  |--tsconfig.json
```

idea for mockup design
https://ninetheme.com/themes/styler/fashion/shop/?min_price=10&max_price=190&shop_layouts=left-sidebar