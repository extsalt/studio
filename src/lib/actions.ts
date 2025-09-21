'use server';

import { z } from 'zod';
import { generateClassDescriptions } from '@/ai/flows/generate-class-descriptions';
import { AdmissionInquirySchema, ContactFormSchema } from '@/lib/types';

// AI Action
const GenerateDescriptionSchema = z.object({
  className: z.string(),
  ageGroup: z.string(),
  subjectCovered: z.string(),
});

type GenerateDescriptionState = {
  description?: string;
  error?: string;
  className?: string;
  ageGroup?: string;
  subjectCovered?: string;
};

export async function generateDescriptionAction(
  prevState: GenerateDescriptionState,
  formData: FormData
): Promise<GenerateDescriptionState> {
  const validatedFields = GenerateDescriptionSchema.safeParse({
    className: formData.get('className'),
    ageGroup: formData.get('ageGroup'),
    subjectCovered: formData.get('subjectCovered'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Invalid input. Please check the fields.',
      ...prevState,
    };
  }

  try {
    const result = await generateClassDescriptions(validatedFields.data);
    return {
      description: result.description,
      className: validatedFields.data.className,
      ageGroup: validatedFields.data.ageGroup,
      subjectCovered: validatedFields.data.subjectCovered,
    };
  } catch (error) {
    console.error(error);
    return {
      error: 'Failed to generate description. Please try again.',
      ...prevState,
    };
  }
}

// Admission Form Action
export async function submitAdmissionInquiry(data: z.infer<typeof AdmissionInquirySchema>) {
  const validatedFields = AdmissionInquirySchema.safeParse(data);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  try {
    // In a real application, you would save this to a database,
    // send an email, or integrate with a CRM.
    console.log('New Admission Inquiry:', validatedFields.data);
    return { success: true, message: 'Inquiry submitted successfully! We will get back to you soon.' };
  } catch (error) {
    console.error('Admission Inquiry Error:', error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}

// Contact Form Action
export async function submitContactForm(data: z.infer<typeof ContactFormSchema>) {
    const validatedFields = ContactFormSchema.safeParse(data);
  
    if (!validatedFields.success) {
      return { success: false, message: 'Invalid data provided.' };
    }
  
    try {
      // In a real application, you would save this to a database or send an email.
      console.log('New Contact Form Submission:', validatedFields.data);
      return { success: true, message: 'Thank you for your message! We will be in touch shortly.' };
    } catch (error) {
      console.error('Contact Form Error:', error);
      return { success: false, message: 'Something went wrong. Please try again.' };
    }
  }
