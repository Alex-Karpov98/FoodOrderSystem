import * as orderQueries from '../db/queries/orderQueries';

export const createOrder = async (data: any) => {
  return await orderQueries.createOrder(data);
};
