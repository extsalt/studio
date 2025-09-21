"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { generateDescriptionAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wand2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Generating...' : <>
      <Wand2 className="mr-2 h-4 w-4" />
      Generate Description
      </>}
    </Button>
  );
}

export default function ClassDescriptionGenerator() {
  const [state, formAction] = useFormState(generateDescriptionAction, {
    description: '',
    error: '',
    className: '',
    ageGroup: '',
    subjectCovered: '',
  });

  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.description) {
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.description]);

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle>AI-Powered Class Description Generator</CardTitle>
        <CardDescription>
          Create engaging class descriptions instantly. Fill in the details below and let our AI do the rest.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} action={formAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="className">Class Name</Label>
            <Input id="className" name="className" placeholder="e.g., Introduction to Python" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ageGroup">Age Group</Label>
            <Input id="ageGroup" name="ageGroup" placeholder="e.g., Ages 14-16" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subjectCovered">Subject Covered</Label>
            <Input id="subjectCovered" name="subjectCovered" placeholder="e.g., Programming" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <SubmitButton />
          {state.error && <p className="text-destructive text-sm mt-2">{state.error}</p>}
        </CardFooter>
      </form>

      {state.description && (
        <div ref={resultRef} className="p-6 pt-0">
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle>Generated Description for "{state.className}"</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{state.description}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
}
