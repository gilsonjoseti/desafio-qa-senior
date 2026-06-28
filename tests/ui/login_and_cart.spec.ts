import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';

test.describe('SauceDemo - UI Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.navigate();
  });

  test('Should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    await expect(productsPage.title).toHaveText('Products');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Should show error message with invalid credentials', async () => {
    await loginPage.login('invalid_user', 'wrong_password');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

  test('Should add an item to the cart', async () => {
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    await productsPage.addItemToCart(0);
    const cartCount = await productsPage.getCartCount();
    expect(cartCount).toBe(1);
  });
});
