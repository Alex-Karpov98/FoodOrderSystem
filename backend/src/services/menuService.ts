import * as menuQueries from '../db/queries/menuQueries';

export const getMenu = async () => {
  return await menuQueries.getMenuItems();
};

export const createMenuItem = async (data: any) => {
  return await menuQueries.addMenuItem(data.title, data.description, data.price, data.imageUrl, data.tags);
};
