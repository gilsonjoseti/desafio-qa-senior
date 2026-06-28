import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addItemToCart(index: number = 0) {
    const addButton = this.inventoryItems.nth(index).locator('button');
    await addButton.click();
  }

  async getCartCount() {
    const count = await this.cartBadge.textContent();
    return count ? parseInt(count) : 0;
  }
}
