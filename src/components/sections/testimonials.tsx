import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { testimonialsData } from '@/lib/data';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const StarRating = ({ rating, className }: { rating: number; className?: string }) => (
  <div className={cn("flex items-center gap-1", className)}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-5 w-5",
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        )}
      />
    ))}
  </div>
);

export default function Testimonials() {
  const { title, description, mainTestimonial, testimonials } = testimonialsData;

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="absolute -top-6 -left-6 z-0">
             <div className="bg-primary rounded-full p-3 text-primary-foreground">
                <Quote className="h-8 w-8" />
             </div>
          </div>
          <Card className="shadow-2xl rounded-xl p-8 bg-secondary">
            <blockquote className="text-center text-xl font-medium text-card-foreground">
              &ldquo;{mainTestimonial.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 text-center">
              <p className="font-semibold text-card-foreground">{mainTestimonial.name}</p>
              <p className="text-sm text-muted-foreground">{mainTestimonial.role}</p>
            </footer>
          </Card>
        </div>

        {/* Other Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg rounded-lg overflow-hidden bg-secondary">
              <CardHeader className="p-6 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                        <AvatarFallback className={cn(testimonial.avatarBg, testimonial.avatarText, 'font-bold')}>
                            {testimonial.initial}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                </div>
                <blockquote className="text-card-foreground/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardHeader>
              <CardContent className="p-6 border-t">
                <StarRating rating={testimonial.rating} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
