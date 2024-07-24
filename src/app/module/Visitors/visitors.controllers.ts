import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import VisitorServices from './visitors.services';

const createVisitor = catchAsync(async (req: Request, res: Response) => {
	const result = await VisitorServices.createVisitor(req.body);

	sendResponse(res, {
		success: true,
		message: 'Visitor created successfully!',
		statusCode: httpStatus.CREATED,
		data: result
	});
});

const getVisitors = catchAsync(async (req: Request, res: Response) => {
	const result = VisitorServices.getVisitors();

	sendResponse(res, {
		success: true,
		message: 'Visitors fetched successfully!',
		statusCode: httpStatus.OK,
		data: result
	});
});

const VisitorControllers = {
	createVisitor,
	getVisitors
};

export default VisitorControllers;
