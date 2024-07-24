import mongoose from 'mongoose';
import { TVisitor } from './visitors.types';

const VisitorSchema = new mongoose.Schema<TVisitor>({
	fullName: { type: String, required: true },
	dateOfBirth: { type: String, required: true },
	nationality: { type: String, required: true },
	email: {
		type: String,
		required: true,
		unique: true
	},
	phone: { type: String, required: true },

	departureDate: { type: String, required: true },
	returnDate: { type: String, required: true },
	accommodationPreference: { type: String, required: true },
	specialRequests: { type: String },

	healthDeclaration: { type: String, required: true },
	emergencyContact: { type: String, required: true },
	medicalConditions: { type: String }
});

const Visitor = mongoose.model('Visitor', VisitorSchema);

export default Visitor;
