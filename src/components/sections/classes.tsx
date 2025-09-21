import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { classesData } from '@/lib/data';
import ClassDescriptionGenerator from '../client/class-description-generator';

export default function Classes() {
  return (
    <section id="classes" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">{classesData.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{classesData.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classesData.classes.map((c) => (
            <Card key={c.name} className="flex flex-col overflow-hidden shadow-md transition-transform hover:scale-105 duration-300">
              <div className="relative h-48">
                <Image
                  src={c.image.imageUrl}
                  alt={c.image.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  data-ai-hint={c.image.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{c.name}</CardTitle>
                <CardDescription>{c.ageGroup}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-24">
            <ClassDescriptionGenerator />
        </div>
      </div>
    </section>
  );
}
