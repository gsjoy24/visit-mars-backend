import { z } from 'zod';

const VisitorValidationSchema = z.object({
	body: z.object({
		fullName: z.string({
			required_error: 'The name is required'
		}),
		dateOfBirth: z.string({
			required_error: 'The date of birth is required'
		}),
		nationality: z.string({
			required_error: 'The nationality is required'
		}),
		email: z
			.string({
				required_error: 'The email is required'
			})
			.email({
				message: 'Please provide a validate email address!'
			}),
		phone: z.string({
			required_error: 'The phone is required'
		}),
		departureDate: z.string({
			required_error: 'The departure date is required'
		}),
		returnDate: z.string({
			required_error: 'The return date is required'
		}),
		accommodationPreference: z.enum(['Space Hotel', 'Martian Base'], {
			message: 'Please select a valid accommodation preference (Space Hotel or Martian Base)'
		}),
		specialRequests: z.string().optional(),
		healthDeclaration: z.enum(['Yes', 'No'], {
			message: 'Please select a valid health declaration (Yes or No)'
		}),
		emergencyContact: z.string({
			required_error: 'The emergency contact is required'
		}),
		medicalConditions: z.string().optional()
	})
});

export default VisitorValidationSchema;
