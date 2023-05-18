import type { ShopParams } from './types';

const BASE_URL = 'http://13.234.201.82:6001/v1';

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getShop = async (params: ShopParams) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    return response.json();
  } catch (error) {
    return error;
  }
};
