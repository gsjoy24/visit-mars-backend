import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import Visitor from './visitors.model';
import { TVisitor } from './visitors.types';

const createVisitor = async (visitor: TVisitor) => {
	// check if the visitor is already in the database
	const visitorExists = await Visitor.findOne({
		email: visitor?.email
	});
	if (visitorExists) {
		throw new AppError(httpStatus.CONFLICT, 'The email is already in use. Please use another email.');
	}

	const newVisitor = await Visitor.create(visitor);
	return newVisitor;
};

const getVisitors = async () => {
	const visitors = await Visitor.find();
	return visitors;
};

const VisitorServices = {
	createVisitor,
	getVisitors
};

export default VisitorServices;
