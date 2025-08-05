import { Application, Router } from 'express';
import { HealthRouter } from './healt';
import { ProductRouter } from './product';

const _routes: Array<[string, Router]> = [
  ['./healt', HealthRouter],
  ['/product', ProductRouter],
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
