import { test, expect } from '@playwright/test';

const API_URL = process.env.API_URL || 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API - User Management', () => {
  
  test('GET /users - Should return success status and validate contract', async ({ request }) => {
    const response = await request.get(`${API_URL}/users`);
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    
    // Contract validation of the first user
    const user = body[0];
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('address');
  });

  test('POST /posts - Should create a post and return 201', async ({ request }) => {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response = await request.post(`${API_URL}/posts`, { data: postData });
    expect(response.status()).toBe(201);
    
    const body = await response.json();
    expect(body.title).toBe(postData.title);
    expect(body).toHaveProperty('id');
  });

  test('PUT /posts/1 - Should update a post and return 200', async ({ request }) => {
    const updatedData = {
      id: 1,
      title: 'foo updated',
      body: 'bar updated',
      userId: 1,
    };
    const response = await request.put(`${API_URL}/posts/1`, { data: updatedData });
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.title).toBe(updatedData.title);
  });

  test('DELETE /posts/1 - Should delete a post and return 200', async ({ request }) => {
    const response = await request.delete(`${API_URL}/posts/1`);
    // JSONPlaceholder returns 200 for delete success
    expect(response.status()).toBe(200);
  });

  test('GET /users/999 - Should return 404 for non-existing user', async ({ request }) => {
    const response = await request.get(`${API_URL}/users/999`);
    expect(response.status()).toBe(404);
  });
});
