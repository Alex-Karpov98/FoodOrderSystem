import express from 'express';
import menuRoutes from './src/routes/menuRoutes';
import orderRoutes from './src/routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);

export default app;
