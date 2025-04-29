import { pool } from '../index';

export const createOrder = async (data: any) => {
  const result = await pool.query(
    'INSERT INTO orders (table_id, total_price) VALUES ($1, $2) RETURNING *',
    [data.tableId, data.totalPrice]
  );
  return result.rows[0];
};
