'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitAdmissionInquiry } from '@/lib/actions';
import { AdmissionInquirySchema, type AdmissionInquiry } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function AdmissionForm() {
    const { toast } = useToast();
    const form = useForm<AdmissionInquiry>({
        resolver: zodResolver(AdmissionInquirySchema),
        defaultValues: {
            parentName: '',
            studentName: '',
            studentAge: undefined,
            email: '',
            phone: '',
            message: '',
        },
    });

    const onSubmit = async (data: AdmissionInquiry) => {
        const result = await submitAdmissionInquiry(data);
        if (result.success) {
            toast({
                title: 'Success!',
                description: result.message,
            });
            form.reset();
        } else {
            toast({
                title: 'Error',
                description: result.message,
                variant: 'destructive',
            });
        }
    };

    return (
        <Card className="shadow-xl bg-card text-card-foreground">
            <CardHeader>
                <CardTitle>Admission Inquiry</CardTitle>
                <CardDescription>Fill out the form below to begin the admission process.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="parentName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Parent's Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="studentName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Student's Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jane Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="studentAge"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Student's Age</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="e.g., 7" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="you@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number (Optional)</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="+1 (234) 567-890" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Any specific questions you have..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
