'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { submitContactForm } from '@/lib/actions';
import { ContactFormSchema, type ContactForm as ContactFormType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
    const { toast } = useToast();
    const form = useForm<ContactFormType>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = async (data: ContactFormType) => {
        const result = await submitContactForm(data);
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
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
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="How can we help you?" {...field} rows={5} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
        </Form>
    );
}
