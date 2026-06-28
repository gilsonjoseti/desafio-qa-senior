# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/users.spec.ts >> ReqRes API - User Management >> PUT /users/2 - Should update a user and return 200
- Location: tests/api/users.spec.ts:40:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const API_URL = process.env.API_URL || 'https://reqres.in/api';
  4  | 
  5  | test.describe('ReqRes API - User Management', () => {
  6  |   
  7  |   test('GET /users - Should return success status and validate contract', async ({ request }) => {
  8  |     const response = await request.get(`${API_URL}/users?page=2`);
  9  |     expect(response.status()).toBe(200);
  10 |     
  11 |     const body = await response.json();
  12 |     expect(body).toHaveProperty('page');
  13 |     expect(body).toHaveProperty('data');
  14 |     expect(Array.isArray(body.data)).toBeTruthy();
  15 |     
  16 |     // Contract validation of the first user
  17 |     const user = body.data[0];
  18 |     expect(user).toHaveProperty('id');
  19 |     expect(user).toHaveProperty('email');
  20 |     expect(user).toHaveProperty('first_name');
  21 |     expect(user).toHaveProperty('last_name');
  22 |     expect(user).toHaveProperty('avatar');
  23 |   });
  24 | 
  25 |   test('POST /users - Should create a user and return 201', async ({ request }) => {
  26 |     const userData = {
  27 |       name: "morpheus",
  28 |       job: "leader"
  29 |     };
  30 |     const response = await request.post(`${API_URL}/users`, { data: userData });
  31 |     expect(response.status()).toBe(201);
  32 |     
  33 |     const body = await response.json();
  34 |     expect(body.name).toBe(userData.name);
  35 |     expect(body.job).toBe(userData.job);
  36 |     expect(body).toHaveProperty('id');
  37 |     expect(body).toHaveProperty('createdAt');
  38 |   });
  39 | 
  40 |   test('PUT /users/2 - Should update a user and return 200', async ({ request }) => {
  41 |     const updatedData = {
  42 |       name: "morpheus",
  43 |       job: "zion resident"
  44 |     };
  45 |     const response = await request.put(`${API_URL}/users/2`, { data: updatedData });
> 46 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  47 |     
  48 |     const body = await response.json();
  49 |     expect(body.job).toBe(updatedData.job);
  50 |     expect(body).toHaveProperty('updatedAt');
  51 |   });
  52 | 
  53 |   test('DELETE /users/2 - Should delete a user and return 204', async ({ request }) => {
  54 |     const response = await request.delete(`${API_URL}/users/2`);
  55 |     expect(response.status()).toBe(204);
  56 |   });
  57 | 
  58 |   test('GET /users/23 - Should return 404 for non-existing user', async ({ request }) => {
  59 |     const response = await request.get(`${API_URL}/users/23`);
  60 |     expect(response.status()).toBe(404);
  61 |   });
  62 | });
  63 | 
```