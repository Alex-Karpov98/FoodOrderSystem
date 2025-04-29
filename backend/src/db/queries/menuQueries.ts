import { pool } from '../index';

export const getMenuItems = async () => {
  const result = await pool.query('SELECT * FROM menu_items');
  return result.rows;
};

export const addMenuItem = async (title: string, description: string, price: number, imageUrl: string, tags: string[]) => {
  const result = await pool.query(
    'INSERT INTO menu_items (title, description, price, image_url, tags) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, description, price, imageUrl, tags]
  );
  return result.rows[0];
};
