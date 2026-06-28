# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/login_and_cart.spec.ts >> SauceDemo - UI Tests >> Should login successfully with valid credentials
- Location: tests/ui/login_and_cart.spec.ts:15:7

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - generic [ref=e17]:
                - button [ref=e18] [cursor=pointer]: Close Menu
                - img [ref=e19]
        - generic [ref=e21]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Backpack" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack"
        - generic [ref=e37]:
          - generic [ref=e38]:
            - link "Sauce Labs Backpack" [ref=e39] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e40]: Sauce Labs Backpack
            - generic [ref=e41]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e42]:
            - generic [ref=e43]: $29.99
            - button "Add to cart" [ref=e44] [cursor=pointer]
      - generic [ref=e45]:
        - link "Sauce Labs Bike Light" [ref=e47] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light"
        - generic [ref=e48]:
          - generic [ref=e49]:
            - link "Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e51]: Sauce Labs Bike Light
            - generic [ref=e52]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e53]:
            - generic [ref=e54]: $9.99
            - button "Add to cart" [ref=e55] [cursor=pointer]
      - generic [ref=e56]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e58] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt"
        - generic [ref=e59]:
          - generic [ref=e60]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e61] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e62]: Sauce Labs Bolt T-Shirt
            - generic [ref=e63]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e64]:
            - generic [ref=e65]: $15.99
            - button "Add to cart" [ref=e66] [cursor=pointer]
      - generic [ref=e67]:
        - link "Sauce Labs Fleece Jacket" [ref=e69] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket"
        - generic [ref=e70]:
          - generic [ref=e71]:
            - link "Sauce Labs Fleece Jacket" [ref=e72] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e73]: Sauce Labs Fleece Jacket
            - generic [ref=e74]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e75]:
            - generic [ref=e76]: $49.99
            - button "Add to cart" [ref=e77] [cursor=pointer]
      - generic [ref=e78]:
        - link "Sauce Labs Onesie" [ref=e80] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie"
        - generic [ref=e81]:
          - generic [ref=e82]:
            - link "Sauce Labs Onesie" [ref=e83] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e84]: Sauce Labs Onesie
            - generic [ref=e85]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e86]:
            - generic [ref=e87]: $7.99
            - button "Add to cart" [ref=e88] [cursor=pointer]
      - generic [ref=e89]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e91] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)"
        - generic [ref=e92]:
          - generic [ref=e93]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e94] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e95]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e96]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e97]:
            - generic [ref=e98]: $15.99
            - button "Add to cart" [ref=e99] [cursor=pointer]
  - contentinfo [ref=e100]:
    - list [ref=e101]:
      - listitem [ref=e102]:
        - link "Twitter" [ref=e103] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e104]:
        - link "Facebook" [ref=e105] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e106]:
        - link "LinkedIn" [ref=e107] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e108]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { ProductsPage } from '../../pages/ProductsPage';
  4  | 
  5  | test.describe('SauceDemo - UI Tests', () => {
  6  |   let loginPage: LoginPage;
  7  |   let productsPage: ProductsPage;
  8  | 
  9  |   test.beforeEach(async ({ page }) => {
  10 |     loginPage = new LoginPage(page);
  11 |     productsPage = new ProductsPage(page);
  12 |     await loginPage.navigate();
  13 |   });
  14 | 
  15 |   test('Should login successfully with valid credentials', async () => {
  16 |     await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
  17 |     await expect(productsPage.title).toHaveText('Products');
> 18 |     await expect(page).toHaveURL(/inventory.html/);
     |                  ^ ReferenceError: page is not defined
  19 |   });
  20 | 
  21 |   test('Should show error message with invalid credentials', async () => {
  22 |     await loginPage.login('invalid_user', 'wrong_password');
  23 |     await expect(loginPage.errorMessage).toBeVisible();
  24 |     await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
  25 |   });
  26 | 
  27 |   test('Should add an item to the cart', async () => {
  28 |     await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
  29 |     await productsPage.addItemToCart(0);
  30 |     const cartCount = await productsPage.getCartCount();
  31 |     expect(cartCount).toBe(1);
  32 |   });
  33 | });
  34 | 
```