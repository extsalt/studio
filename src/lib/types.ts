import { z } from 'zod';

export const AdmissionInquirySchema = z.object({
  parentName: z.string().min(2, { message: "Parent's name must be at least 2 characters." }),
  studentName: z.string().min(2, { message: "Student's name must be at least 2 characters." }),
  studentAge: z.coerce.number().min(3, { message: 'Student must be at least 3 years old.' }).max(18, { message: 'Student must be at most 18 years old.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).optional(),
});

export type AdmissionInquiry = z.infer<typeof AdmissionInquirySchema>;


export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Your name must be at least 2 characters." }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;
