import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { upcomingEventsData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const EventCard = ({
  title,
  date,
  description,
  color,
  buttonColor,
}: {
  title: string;
  date: string;
  description: string;
  color: string;
  buttonColor: string;
}) => (
  <Card className="flex flex-col shadow-lg rounded-lg overflow-hidden w-full">
    <CardHeader className={`${color} text-white p-6`}>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      <p className="text-sm">{date}</p>
    </CardHeader>
    <CardContent className="p-6 bg-secondary flex-grow">
      <p className="text-card-foreground/80">{description}</p>
    </CardContent>
    <CardFooter className="p-6 bg-secondary">
      <Button className={`w-full text-white ${buttonColor}`}>Learn More</Button>
    </CardFooter>
  </Card>
);

export default function UpcomingEvents() {
  const { title, description, events } = upcomingEventsData;
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>

        <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="bg-background hover:bg-accent hover:text-accent-foreground border-2 border-input">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </div>
    </section>
  );
}
