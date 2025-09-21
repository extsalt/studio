import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const programs = [
  {
    title: 'Primary School',
    grades: 'Grades 1-5',
    features: ['Foundation in Core Subjects', 'Interactive Learning', 'Character Development'],
    color: 'bg-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    title: 'Middle School',
    grades: 'Grades 6-8',
    features: ['Advanced Core Subjects', 'STEM Programs', 'Leadership Development'],
    color: 'bg-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700',
  },
  {
    title: 'High School',
    grades: 'Grades 9-12',
    features: ['College Preparation', 'Advanced Placement', 'Career Guidance'],
    color: 'bg-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
  },
];

const ProgramCard = ({
  title,
  grades,
  features,
  color,
  buttonColor,
}: {
  title: string;
  grades: string;
  features: string[];
  color: string;
  buttonColor: string;
}) => (
  <Card className="flex flex-col shadow-lg rounded-lg overflow-hidden w-full">
    <CardHeader className={`${color} text-white p-6`}>
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      <p>{grades}</p>
    </CardHeader>
    <CardContent className="p-6 bg-card flex-grow">
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-card-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="p-6 bg-card">
      <Button className={`w-full text-white ${buttonColor}`}>Learn More</Button>
    </CardFooter>
  </Card>
);

export default function EducationalPrograms() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Educational Programs</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive educational programs designed to nurture young minds and foster academic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
