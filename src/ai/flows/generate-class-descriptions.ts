'use server';

/**
 * @fileOverview A flow for generating class descriptions using AI.
 *
 * - generateClassDescriptions - A function that generates engaging class descriptions.
 * - GenerateClassDescriptionsInput - The input type for the generateClassDescriptions function.
 * - GenerateClassDescriptionsOutput - The return type for the generateClassDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateClassDescriptionsInputSchema = z.object({
  className: z.string().describe('The name of the class.'),
  ageGroup: z.string().describe('The age group for the class.'),
  subjectCovered: z.string().describe('The subject covered in the class.'),
});
export type GenerateClassDescriptionsInput = z.infer<
  typeof GenerateClassDescriptionsInputSchema
>;

const GenerateClassDescriptionsOutputSchema = z.object({
  description: z
    .string()
    .describe('An engaging and informative description of the class.'),
});
export type GenerateClassDescriptionsOutput = z.infer<
  typeof GenerateClassDescriptionsOutputSchema
>;

export async function generateClassDescriptions(
  input: GenerateClassDescriptionsInput
): Promise<GenerateClassDescriptionsOutput> {
  return generateClassDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateClassDescriptionsPrompt',
  input: {schema: GenerateClassDescriptionsInputSchema},
  output: {schema: GenerateClassDescriptionsOutputSchema},
  prompt: `You are an expert curriculum developer. Generate an engaging and informative description for the class. Consider the age group, subject covered and class name when generating the description.  The generated description should be less than 100 words.

Class Name: {{{className}}}
Age Group: {{{ageGroup}}}
Subject Covered: {{{subjectCovered}}}
Description:`,
});

const generateClassDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateClassDescriptionsFlow',
    inputSchema: GenerateClassDescriptionsInputSchema,
    outputSchema: GenerateClassDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
