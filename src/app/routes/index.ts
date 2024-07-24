import express from 'express';
import VisitorRoutes from '../module/Visitors/visitor.routes';

const router = express.Router();

const moduleRoutes = [
	{
		path: '/visitors',
		route: VisitorRoutes
	}
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
