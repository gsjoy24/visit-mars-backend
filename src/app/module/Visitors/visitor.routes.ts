import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import VisitorControllers from './visitors.controllers';
import VisitorValidationSchema from './visitors.validates';

const route = express.Router();

route.get('/', VisitorControllers.getVisitors);

route.post('/create', validateRequest(VisitorValidationSchema), VisitorControllers.createVisitor);

const VisitorRoutes = route;

export default VisitorRoutes;
